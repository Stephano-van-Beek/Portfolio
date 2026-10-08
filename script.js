const USER = 'Stephano-van-Beek';
const container = document.getElementById('repos');
document.getElementById('year').textContent = new Date().getFullYear();

function esc(s) {
  const d = document.createElement('div');
  d.textContent = s ?? '';
  return d.innerHTML;
}

async function loadRepos() {
  try {
    const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`);
    if (!res.ok) throw new Error(res.status);
    const repos = (await res.json()).filter(r => !r.fork && r.name !== 'Portfolio');
    container.innerHTML = repos.map(r => `
      <a class="card" href="${r.html_url}" target="_blank" rel="noopener">
        <h3>${esc(r.name)}</h3>
        <p>${esc(r.description) || 'No description yet.'}</p>
        <span class="tag">${esc(r.language) || 'Misc'} &middot; updated ${new Date(r.updated_at).toLocaleDateString()}</span>
      </a>`).join('');
  } catch (e) {
    container.innerHTML = `<p>Could not load repos. <a href="https://github.com/${USER}?tab=repositories">View them on GitHub</a>.</p>`;
  }
}
loadRepos();
