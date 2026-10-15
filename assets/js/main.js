
(() => {
  'use strict';

  const USER = 'Nfoedy';
  const projects = window.PORTFOLIO_PROJECTS;

  if (!Array.isArray(projects)) {
    console.error('Portfolio projects data is missing.');
    return;
  }

  const signature = JSON.stringify(projects);
  const CW_CACHE = 'portfolio_current_v5';
  const HOUR = 3600000;

  const byId = id => document.getElementById(id);

  // =========================================================
  // HELPERS
  // =========================================================

  function element(tag, className, text) {
    const node = document.createElement(tag);

    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;

    return node;
  }

  function link(text, url, className) {
    const node = element('a', className, text);

    node.href = url;
    node.target = '_blank';
    node.rel = 'noopener noreferrer';

    return node;
  }

  function repoPath(repo) {
    return repo.split('/').map(encodeURIComponent).join('/');
  }

  function repoUrl(repo) {
    return 'https://github.com/' + repoPath(repo);
  }

  function readCache(key) {
    try {
      const value = JSON.parse(localStorage.getItem(key));

      return value?.signature === signature &&
        Number.isFinite(value.t)
        ? value
        : null;
    } catch {
      return null;
    }
  }

  function writeCache(key, value) {
    try {
      localStorage.setItem(
        key,
        JSON.stringify({ ...value, signature })
      );
    } catch {
      // Local storage may be unavailable.
    }
  }

  function fresh(cache, hours) {
    const age = Date.now() - (cache?.t || 0);

    return Boolean(cache) &&
      age >= 0 &&
      age < hours * HOUR;
  }

  async function github(path, html = false) {
    const controller = new AbortController();

    const timer = setTimeout(
      () => controller.abort(),
      8000
    );

    try {
      const response = await fetch(
        'https://api.github.com/' + path,
        {
          headers: {
            Accept: html ? 'application/vnd.github.html+json' : 'application/vnd.github+json'
          },
          signal: controller.signal
        }
      );

      if (!response.ok) {
        const error = new Error('GitHub HTTP ' + response.status);
        error.status = response.status;
        throw error;
      }

      return html ? await response.text() : await response.json();
    } finally {
      clearTimeout(timer);
    }
  }

  // =========================================================
  // PROJECT MODAL
  // =========================================================

  const modal = byId('vmodal');
  const panel = modal.querySelector('.vmodal__panel');
  const frame = byId('vmodalFrame');
  const frameWrap = modal.querySelector('.vmodal__frame-wrap');
  const closeButton = modal.querySelector('.vmodal__close');

  let opener = null;
  let oldOverflow = '';
  let backgroundState = [];
  let readmeLoadId = 0;

  const readmeCache = new Map();

  // Additional modal content, created dynamically.
  const modalDetails = element(
    'div',
    'vmodal__details'
  );

  const modalSummary = element('p', 'vmodal__summary');
  const videoNotice = element('p', 'vmodal__video-notice', 'Video not available yet.');
  frameWrap.after(videoNotice);

  const readmeTitle = element(
    'h3',
    'vmodal__heading',
    'README'
  );

  const readmeContent = element(
    'div',
    'vmodal__readme'
  );

  readmeContent.setAttribute('aria-live', 'polite');

  const modalRepository = element(
    'div',
    'vmodal__repository'
  );

  modalDetails.append(
    modalSummary,
    readmeTitle,
    readmeContent,
    modalRepository
  );

  panel.append(modalDetails);

  // =========================================================
  // LOAD PROJECT README
  // =========================================================

  async function loadReadme(project) {
    const requestId = ++readmeLoadId;

    if (project.private) {
      readmeContent.textContent =
        'The README is not publicly available for this project.';
      return;
    }

    if (readmeCache.has(project.repo)) {
      window.renderPortfolioReadme(readmeContent, readmeCache.get(project.repo), project.repo);
      return;
    }

    readmeContent.textContent = 'Loading README...';

    try {
      const content = await github('repos/' + repoPath(project.repo) + '/readme', true);

      readmeCache.set(project.repo, content);

      // Avoid displaying another project's README
      // if the user closes or changes the modal.
      if (
        requestId !== readmeLoadId ||
        modal.hidden
      ) {
        return;
      }

      window.renderPortfolioReadme(readmeContent, content, project.repo);
    } catch (error) {
      if (
        requestId !== readmeLoadId ||
        modal.hidden
      ) {
        return;
      }

      readmeContent.textContent = error.status === 404
        ? 'No public README is available for this project.'
        : 'The README could not be loaded. Please try again or open the repository below.';
    }
  }

  // =========================================================
  // OPEN MODAL
  // =========================================================

  function openModal(project, trigger) {
    opener = trigger;
    oldOverflow = document.body.style.overflow;

    byId('vmodalTitle').textContent = project.name;
    modalSummary.textContent = project.description + (project.role ? ' My contribution: ' + project.role : '');
    videoNotice.hidden = Boolean(project.youtube);

    // Show the video only when available.
    if (project.youtube) {
      frameWrap.hidden = false;

      frame.src =
        'https://www.youtube.com/embed/' +
        encodeURIComponent(project.youtube) +
        '?autoplay=1&rel=0&playsinline=1';
    } else {
      frameWrap.hidden = true;
      frame.removeAttribute('src');
    }

    // Repository link.
    modalRepository.replaceChildren();

    if (project.private) {
      modalRepository.append(
        element('span', 'muted', 'Source code not public')
      );
    } else {
      modalRepository.append(
        link(
          'View Repository on GitHub ↗',
          repoUrl(project.repo),
          'btn small'
        )
      );
    }

    readmeContent.textContent = 'Loading README...';

    // Prevent interaction with page content
    // while the modal is open.
    backgroundState = [
      ...document.querySelectorAll('header, main')
    ].map(node => [node, node.inert]);

    backgroundState.forEach(([node]) => {
      node.inert = true;
    });

    modal.hidden = false;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');

    panel.scrollTop = 0;
    document.body.style.overflow = 'hidden';

    closeButton.focus();

    loadReadme(project);
  }

  // =========================================================
  // CLOSE MODAL
  // =========================================================

  function closeModal() {
    if (modal.hidden) return;

    ++readmeLoadId;

    modal.classList.remove('is-open');
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');

    frame.removeAttribute('src');

    document.body.style.overflow = oldOverflow;

    backgroundState.forEach(([node, inert]) => {
      node.inert = inert;
    });

    backgroundState = [];

    if (opener?.isConnected) {
      opener.focus();
    }

    opener = null;
  }

  modal.addEventListener('click', event => {
    if (event.target.dataset.close) {
      closeModal();
    }
  });

  document.addEventListener('keydown', event => {
    if (modal.hidden) return;

    if (event.key === 'Escape') {
      closeModal();
      return;
    }

    if (event.key !== 'Tab') return;

    const focusable = [
      ...modal.querySelectorAll(
        'button:not([disabled]), a[href], iframe'
      )
    ].filter(node => {
      return !node.closest('[hidden]') &&
        node.getClientRects().length > 0;
    });

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (
      event.shiftKey &&
      document.activeElement === first
    ) {
      event.preventDefault();
      last.focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === last
    ) {
      event.preventDefault();
      first.focus();
    }
  });

  document.addEventListener('focusin', event => {
    if (
      !modal.hidden &&
      !modal.contains(event.target)
    ) {
      closeButton.focus();
    }
  });

  // =========================================================
  // PROJECT CARDS
  // =========================================================

  function detailsButton(project, className) {
    const button = element(
      'button',
      className,
      project.name
    );

    button.type = 'button';
    button.setAttribute('aria-haspopup', 'dialog');

    button.setAttribute(
      'aria-label',
      'View details for ' + project.name
    );

    button.addEventListener('click', () => {
      openModal(project, button);
    });

    return button;
  }

  function renderProject(project) {
    const card = element('article', 'project-card');
    const preview = element('div', 'project-preview');
    if (project.youtube) {
      const image = element('img');
      image.src = 'https://i.ytimg.com/vi/' + encodeURIComponent(project.youtube) + '/hqdefault.jpg';
      image.alt = '';
      image.loading = 'lazy';
      preview.append(image);
    } else {
      preview.classList.add('project-preview--placeholder');
      preview.append(element('span', '', project.stack[0] || 'Project'));
    }
    preview.setAttribute('aria-hidden', 'true');
    const body = element('div', 'project-copy');
    const title = element('h3', 'project-title');
    title.append(detailsButton(project, 'project-open'));
    body.append(title, element('p', 'project-description', project.description));
    const tags = element('div', 'project-tags');
    for (const item of project.stack) tags.append(element('span', 'project-tag', item));
    if (project.collaboration) tags.append(element('span', 'project-tag project-tag--collab', 'Team project'));
    if (project.status) tags.append(element('span', 'project-tag', project.status));
    body.append(tags);
    card.append(preview, body);
    return card;
  }

  // =========================================================
  // RENDER PROJECTS BY CATEGORY
  // =========================================================

  function renderProjects() {
    const sections = {
      personal: 'personalGrid',
      master: 'masterGrid',
      other: 'otherList'
    };

    for (const [section, id] of Object.entries(sections)) {
      const items = projects.filter(
        project => project.section === section
      );

      const container = byId(id);

      container.replaceChildren(
        ...items.map(renderProject)
      );

      if (!items.length) {
        container.append(
          element(
            'p',
            'muted2',
            'No projects in this section yet.'
          )
        );
      }
    }
  }

  // =========================================================
  // CURRENTLY WORKING ON
  // =========================================================

  function showCurrent(repo) {
    const configured = projects.find(
      project =>
        project.repo.toLowerCase() ===
        repo.full_name.toLowerCase()
    );

    const name = configured?.name || repo.name;
    const text = byId('cwText');

    text.replaceChildren(
      document.createTextNode('Recent work: '),
      element('b', '', name)
    );

    const description =
      configured?.description || repo.description;

    if (description) {
      text.append(
        document.createTextNode(' — ' + description)
      );
    }

    const date = new Date(
      repo.pushed_at || repo.updated_at
    );

    if (!Number.isNaN(date.getTime())) {
      const formatted = new Intl.DateTimeFormat(
        'en-GB',
        {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        }
      ).format(date);

      text.append(
        element(
          'span',
          'cw-date',
          ' (' + formatted + ')'
        )
      );
    }

    byId('cwRepo').replaceChildren(
      link(name, repoUrl(repo.full_name))
    );

    byId('cwStack').textContent =
      configured?.stack.join(' • ') ||
      repo.language ||
      '—';
  }

  async function loadCurrent() {
    const cached = readCache(CW_CACHE);

    if (cached?.repo?.full_name) {
      showCurrent(cached.repo);

      if (fresh(cached, 6)) return;
    }

    try {
      const repos = await github(
        'users/' + USER + '/repos?per_page=100&sort=pushed'
      );

      const repo = repos.find(r =>
        !r.fork &&
        !r.archived &&
        !r.disabled &&
        !['nfoedy', 'nfoedy.github.io'].includes(
          r.name.toLowerCase()
        ) &&
        projects.some(
          p =>
            p.repo.toLowerCase() ===
            r.full_name.toLowerCase()
        )
      );

      if (!repo) {
        throw new Error('No matching public project');
      }

      showCurrent(repo);

      writeCache(CW_CACHE, {
        t: Date.now(),
        repo: {
          full_name: repo.full_name,
          name: repo.name,
          description: repo.description,
          language: repo.language,
          pushed_at: repo.pushed_at,
          updated_at: repo.updated_at
        }
      });
    } catch {
      if (!cached?.repo?.full_name) {
        byId('cwText').textContent =
          'Explore my projects below. Recent GitHub activity is currently unavailable.';

        byId('cwRepo').textContent = '—';
        byId('cwStack').textContent = '—';
      }
    }
  }

  // =========================================================
  // INITIALIZATION
  // =========================================================

  byId('year').textContent = new Date().getFullYear();

  renderProjects();
  loadCurrent();

})();
