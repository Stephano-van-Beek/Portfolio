// Any element with data-filter="projects|mbo|featured" is filled from GitHub automatically.
// New repositories show up on their own. Repos with "mbo" in the name (or the topic "mbo") count as MBO.
const USER = 'Stephano-van-Beek';
const MBO_TOPIC = 'mbo';
const EXCLUDED = ['Portfolio', USER];

const containers = [...document.querySelectorAll('.repo-grid[data-filter]')];

function esc(s) {
  const d = document.createElement('div');
  d.textContent = s ?? '';
  return d.innerHTML;
}

const HIDDEN_TOPICS = [MBO_TOPIC, 'featured'];

function card(r) {
  const tags = (r.topics || []).filter(t => !HIDDEN_TOPICS.includes(t));
  const tagHtml = tags.length ? `<div class="repo-tags">${tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>` : '';
  return `
    <a class="card" href="${esc(r.html_url)}" target="_blank" rel="noopener">
      <h3>${esc(r.name)}</h3>
      <p>${esc(r.description) || 'No description yet.'}</p>
      ${tagHtml}
      <span class="repo-meta">${esc(r.language) || 'Misc'} &middot; updated ${new Date(r.updated_at).toLocaleDateString()}</span>
    </a>`;
}

async function loadRepos() {
  try {
    const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`);
    if (!res.ok) throw new Error(res.status);
    const all = (await res.json()).filter(r => !r.fork && !r.archived && !EXCLUDED.includes(r.name));
    // A repo counts as MBO when its name contains "mbo" or it has the "mbo" topic.
    const isMbo = r => /mbo/i.test(r.name) || (r.topics || []).includes(MBO_TOPIC);
    const isFeatured = r => (r.topics || []).includes('featured');

    containers.forEach(container => {
      const filter = container.dataset.filter || 'projects';
      let repos = filter === 'mbo' ? all.filter(isMbo) : filter === 'featured' ? all : all.filter(r => !isMbo(r));
      if (filter === 'featured') {
        // Repos with the GitHub topic "featured" come first; the rest are the latest updated.
        repos = [...repos.filter(isFeatured), ...repos.filter(r => !isFeatured(r))].slice(0, 3);
        container.classList.add('featured');
      }
      container.innerHTML = repos.length
        ? repos.map(card).join('')
        : '<p class="state-msg">Nothing here yet.</p>';
    });
  } catch {
    containers.forEach(c => {
      c.innerHTML = `<p class="state-msg">Could not load repositories. <a href="https://github.com/${USER}?tab=repositories">View them on GitHub</a>.</p>`;
    });
  }
}

if (containers.length) loadRepos();
