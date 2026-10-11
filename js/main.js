// Acts like a PHP include: loads html/partials/*.html into every page.
// Each page sets <body data-root=""> (root) or data-root="../" (inside html/).
// Needs a web server (GitHub Pages or `python -m http.server`), not file://.
const root = document.body.dataset.root || '';
const here = location.pathname.split('/').pop() || 'index.html';

async function include(id, file) {
  const el = document.getElementById(id);
  if (!el) return;
  try {
    const res = await fetch(`${root}html/partials/${file}`);
    if (!res.ok) throw new Error(res.status);
    el.innerHTML = (await res.text()).replaceAll('{{root}}', root);
  } catch {
    el.innerHTML = '<p class="state-msg">Could not load ' + file + '. Use a web server, not file://.</p>';
  }
}

(async () => {
  await Promise.all([include('site-header', 'header.html'), include('site-footer', 'footer.html')]);
  document.querySelectorAll('.topnav a').forEach(a => {
    if (a.getAttribute('href').split('/').pop() === here) a.classList.add('active');
  });
  document.querySelectorAll('[data-year]').forEach(s => (s.textContent = new Date().getFullYear()));
  if (window.applyLang) applyLang(currentLang());
})();
