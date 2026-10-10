// Any page with <div id="repos" data-filter="projects|mbo|featured"> is filled from GitHub automatically.
// New repositories show up on their own. Add the GitHub topic "mbo" to a repo to move it to the MBO page.
const USER = 'Stephano-van-Beek';
const MBO_TOPIC = 'mbo';
const EXCLUDED = ['Portfolio', USER];

const container = document.getElementById('repos');

function esc(s) {
  const d = document.createElement('div');
  d.textContent = s ?? '';
  return d.innerHTML;
}

function card(r) {
  return `
    <a class="card" href="${esc(r.html_url)}" target="_blank" rel="noopener">
      <h3>${esc(r.name)}</h3>
      <p>${esc(r.description) || 'No description yet.'}</p>
      <span class="repo-meta">${esc(r.language) || 'Misc'} &middot; updated ${new Date(r.updated_at).toLocaleDateString()}</span>
    </a>`;
}

async function loadRepos() {
  const filter = container.dataset.filter || 'projects';
  try {
    const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`);
    if (!res.ok) throw new Error(res.status);
    let repos = (await res.json()).filter(r => !r.fork && !r.archived && !EXCLUDED.includes(r.name));
    const isMbo = r => (r.topics || []).includes(MBO_TOPIC);

    repos = filter === 'mbo' ? repos.filter(isMbo) : repos.filter(r => !isMbo(r));
    if (filter === 'featured') repos = repos.slice(0, 3);

    container.innerHTML = repos.length
      ? repos.map(card).join('')
      : '<p class="state-msg">Nothing here yet.</p>';
  } catch {
    container.innerHTML = `<p class="state-msg">Could not load repositories. <a href="https://github.com/${USER}?tab=repositories">View them on GitHub</a>.</p>`;
  }
}

if (container) loadRepos();
