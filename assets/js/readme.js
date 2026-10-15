// GitHub renders Markdown. Rebuild an allowlisted DOM before displaying it.
// No scripts, embedded players, event attributes or inline styles are imported.
(() => {
  'use strict';
  const allowed = new Set('p div span h1 h2 h3 h4 h5 h6 ul ol li blockquote pre code strong em b i del s br hr a img table thead tbody tfoot tr th td details summary kbd sup sub'.split(' '));
  const blocked = new Set('script style iframe object embed form input button textarea select link meta svg math template'.split(' '));

  window.renderPortfolioReadme = (target, html, repo, ref) => {
    const path = repo.split('/').map(encodeURIComponent).join('/');
    const base = 'https://github.com/' + path + '/blob/' + encodeURIComponent(ref || 'HEAD') + '/';
    const documentSource = new DOMParser().parseFromString(html, 'text/html');

    function safeUrl(value, image) {
      if (!value) return null;
      try {
        const url = new URL(value, base);
        if (!['https:', 'http:'].includes(url.protocol)) return null;
        if (image && url.hostname === 'github.com' && url.pathname.includes('/blob/')) {
          url.hostname = 'raw.githubusercontent.com';
          url.pathname = url.pathname.replace('/blob/', '/');
          url.search = '';
        }
        return url.href;
      } catch { return null; }
    }

    function copy(node) {
      if (node.nodeType === Node.TEXT_NODE) return document.createTextNode(node.textContent);
      if (node.nodeType !== Node.ELEMENT_NODE) return document.createDocumentFragment();
      const tag = node.tagName.toLowerCase();
      if (blocked.has(tag)) return document.createDocumentFragment();
      // GitHub's empty permalink anchors contain SVG icons, which are omitted.
      if (tag === 'a' && !node.textContent.trim() && !node.querySelector('img')) return document.createDocumentFragment();
      const result = allowed.has(tag) ? document.createElement(tag) : document.createDocumentFragment();
      if (tag === 'a') {
        const href = safeUrl(node.getAttribute('href'), false);
        if (href) { result.href = href; result.target = '_blank'; result.rel = 'noopener noreferrer'; }
      }
      if (tag === 'img') {
        const src = safeUrl(node.getAttribute('src'), true);
        if (!src) return document.createTextNode(node.getAttribute('alt') || '');
        result.src = src;
        result.alt = node.getAttribute('alt') || '';
        result.loading = 'lazy';
        result.referrerPolicy = 'no-referrer';
      }
      if (['th', 'td'].includes(tag)) {
        for (const attr of ['colspan', 'rowspan']) {
          const value = Number(node.getAttribute(attr));
          if (value > 0 && value <= 20) result.setAttribute(attr, String(value));
        }
      }
      for (const child of node.childNodes) result.append(copy(child));
      return result;
    }
    target.replaceChildren(...[...documentSource.body.childNodes].map(copy));
    if (!target.textContent.trim() && !target.querySelector('img')) target.textContent = window.portfolioI18n.t('This README is empty.');
  };
})();
