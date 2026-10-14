(() => {
  'use strict';
  const USER = 'Nfoedy';
  const projects = window.PORTFOLIO_PROJECTS;
  const signature = JSON.stringify(projects);
  const CACHE = 'portfolio_projects_v3';
  const CW_CACHE = 'portfolio_current_v5';
  const HOUR = 3600000;
  const byId = id => document.getElementById(id);

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }
  function link(text, url, className) {
    const node = element('a', className, text);
    node.href = url;
    node.target = '_blank';
    node.rel = 'noopener noreferrer';
    return node;
  }
  function repoUrl(repo) {
    return 'https://github.com/' + repo.split('/').map(encodeURIComponent).join('/');
  }
  function readCache(key) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value?.signature === signature && Number.isFinite(value.t) ? value : null;
    } catch { return null; }
  }
  function writeCache(key, value) {
    try { localStorage.setItem(key, JSON.stringify({ ...value, signature })); } catch {}
  }
  function fresh(cache, hours) {
    const age = Date.now() - (cache?.t || 0);
    return Boolean(cache) && age >= 0 && age < hours * HOUR;
  }
  async function github(path) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch('https://api.github.com/' + path, {
        headers: { Accept: 'application/vnd.github+json' }, signal: controller.signal
      });
      if (!response.ok) throw new Error('GitHub HTTP ' + response.status);
      return await response.json();
    } finally { clearTimeout(timer); }
  }

  // The dialog is hidden and absent from keyboard navigation until opened.
  const modal = byId('vmodal');
  const frame = byId('vmodalFrame');
  const closeButton = modal.querySelector('.vmodal__close');
  let opener = null;
  let oldOverflow = '';
  let backgroundState = [];
  function openModal(project, trigger) {
    opener = trigger;
    oldOverflow = document.body.style.overflow;
    byId('vmodalTitle').textContent = project.name;
    frame.src = 'https://www.youtube.com/embed/' + encodeURIComponent(project.youtube) + '?autoplay=1&rel=0&playsinline=1';
    backgroundState = [...document.querySelectorAll('header, main')].map(node => [node, node.inert]);
    backgroundState.forEach(([node]) => { node.inert = true; });
    modal.hidden = false;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeButton.focus();
  }
  function closeModal() {
    if (modal.hidden) return;
    modal.classList.remove('is-open');
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    frame.removeAttribute('src');
    document.body.style.overflow = oldOverflow;
    backgroundState.forEach(([node, inert]) => { node.inert = inert; });
    if (opener?.isConnected) opener.focus();
  }
  modal.addEventListener('click', event => {
    if (event.target.dataset.close) closeModal();
  });
  document.addEventListener('keydown', event => {
    if (modal.hidden) return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'Tab' && event.shiftKey && document.activeElement === closeButton) {
      event.preventDefault();
      frame.focus();
    }
  });
  // Includes focus leaving the cross-origin YouTube iframe via Tab.
  document.addEventListener('focusin', event => {
    if (!modal.hidden && !modal.contains(event.target)) closeButton.focus();
  });

  function projectLink(project) {
    return project.private
      ? element('span', 'muted', 'Code not public')
      : link('Repo →', repoUrl(project.repo), project.section === 'other' ? 'other-link' : 'btn small');
  }
  function renderProject(project) {
    const other = project.section === 'other';
    const card = element('article', other ? 'other-item' : 'p-card');
    if (!other) {
      if (project.collaboration) card.append(element('div', 'card-badge collab card-badge--right', 'COLLAB'));
      const media = element('button', 'p-media' + (project.youtube ? '' : ' is-disabled'));
      media.type = 'button';
      media.disabled = !project.youtube;
      media.setAttribute('aria-label', project.youtube ? 'Play ' + project.name + ' video' : project.name + ': video not available');
      if (project.youtube) {
        const poster = element('img', 'p-poster');
        poster.src = 'https://i.ytimg.com/vi/' + encodeURIComponent(project.youtube) + '/hqdefault.jpg';
        poster.alt = project.name + ' thumbnail';
        poster.loading = 'lazy';
        media.append(poster);
        media.addEventListener('click', () => openModal(project, media));
      } else media.append(element('div', 'p-poster p-poster--placeholder'));
      const play = element('span', 'p-play', project.youtube ? '▶' : '⧗');
      play.setAttribute('aria-hidden', 'true');
      media.append(play);
      card.append(media);
    }
    const body = element('div', other ? 'other-main' : 'p-body');
    body.append(element('h3', other ? 'other-title' : 'p-title', project.name));
    body.append(element('p', other ? 'other-desc' : 'p-desc', project.description));
    if (project.status) body.append(element('p', 'project-status', project.status));
    if (project.role) body.append(element('p', 'project-role', 'My contribution: ' + project.role));
    const stack = element('span', 'muted', project.stack.join(' • '));
    if (other) {
      body.append(stack);
      const action = element('div', 'other-action');
      action.append(projectLink(project));
      card.append(body, action);
    } else {
      const row = element('div', 'p-row');
      row.append(projectLink(project), stack);
      body.append(row);
      card.append(body);
    }
    return card;
  }
  function renderProjects() {
    for (const [section, id] of Object.entries({ personal: 'personalGrid', master: 'masterGrid', other: 'otherList' })) {
      const items = projects.filter(project => project.section === section);
      byId(id).replaceChildren(...items.map(renderProject));
      if (!items.length) byId(id).append(element('p', 'muted2', 'No projects in this section yet.'));
    }
  }

  // Editorial copy lives locally. API metadata is optional and never removes cards.
  async function loadProjectMetadata() {
    const cached = readCache(CACHE);
    const items = cached?.items && typeof cached.items === 'object' ? { ...cached.items } : {};
    if (fresh(cached, 24) && projects.every(p => p.private || items[p.repo])) return items;
    const status = byId('projectsStatus');
    status.textContent = 'Projects are available. Checking recent GitHub activity…';
    let failed = false;
    await Promise.all(projects.filter(p => !p.private).map(async project => {
      try {
        const repo = await github('repos/' + project.repo);
        if (typeof repo.full_name !== 'string') throw new Error('Invalid repository data');
        items[project.repo] = { updatedAt: repo.updated_at, pushedAt: repo.pushed_at };
      } catch { failed = true; }
    }));
    // A partial refresh preserves prior entries and stays stale for a later retry.
    writeCache(CACHE, { t: failed ? (cached?.t || 0) : Date.now(), items });
    status.textContent = failed ? 'Some GitHub activity could not be refreshed. All projects remain available.' : '';
    return items;
  }
  function showCurrent(repo) {
    const configured = projects.find(project => project.repo.toLowerCase() === repo.full_name.toLowerCase());
    const name = configured?.name || repo.name;
    const text = byId('cwText');
    text.replaceChildren(document.createTextNode('Recent work: '), element('b', '', name));
    const description = configured?.description || repo.description;
    if (description) text.append(document.createTextNode(' — ' + description));
    const date = new Date(repo.pushed_at || repo.updated_at);
    if (!Number.isNaN(date.getTime())) text.append(element('span', 'cw-date', ' (' + new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(date) + ')'));
    byId('cwRepo').replaceChildren(link(name, repoUrl(repo.full_name)));
    byId('cwStack').textContent = configured?.stack.join(' • ') || repo.language || '—';
  }
  async function loadCurrent() {
    const cached = readCache(CW_CACHE);
    if (cached?.repo?.full_name) {
      showCurrent(cached.repo);
      if (fresh(cached, 6)) return;
    }
    try {
      const repos = await github('users/' + USER + '/repos?per_page=100&sort=pushed');
      const repo = repos.find(r => !r.fork && !r.archived && !r.disabled &&
        !['nfoedy', 'nfoedy.github.io'].includes(r.name.toLowerCase()) &&
        projects.some(p => p.repo.toLowerCase() === r.full_name.toLowerCase()));
      if (!repo) throw new Error('No matching public project');
      showCurrent(repo);
      writeCache(CW_CACHE, { t: Date.now(), repo: {
        full_name: repo.full_name, name: repo.name, description: repo.description,
        language: repo.language, pushed_at: repo.pushed_at, updated_at: repo.updated_at
      }});
    } catch {
      if (!cached?.repo?.full_name) {
        byId('cwText').textContent = 'Explore my projects below. Recent GitHub activity is currently unavailable.';
        byId('cwRepo').textContent = '—';
        byId('cwStack').textContent = '—';
      }
    }
  }
  byId('year').textContent = new Date().getFullYear();
  renderProjects();
  loadProjectMetadata();
  loadCurrent();
})();
