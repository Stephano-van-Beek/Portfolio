const NAV = [
  ['index.html', 'Home'],
  ['projects.html', 'Projects'],
  ['mbo.html', 'MBO'],
  ['cv.html', 'CV'],
];

const page = location.pathname.split('/').pop() || 'index.html';

document.getElementById('site-header').innerHTML = `
  <header class="topbar">
    <div class="topbar-inner">
      <a class="brand" href="index.html">
        <span class="brand-logo-text">SvB</span>
        <span class="brand-text">
          <span class="brand-title">Stephano van Beek</span>
          <span class="brand-sub">Cyber Security &middot; HBO-ICT</span>
        </span>
      </a>
      <nav class="topnav">
        ${NAV.map(([href, label]) =>
          `<a href="${href}"${href === page ? ' class="active"' : ''}>${label}</a>`).join('')}
      </nav>
    </div>
  </header>`;

document.getElementById('site-footer').innerHTML =
  `<footer class="footer">&copy; ${new Date().getFullYear()} Stephano van Beek</footer>`;
