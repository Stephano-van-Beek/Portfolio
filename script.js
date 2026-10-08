function el(tag, props, children) {
  const e = document.createElement(tag);
  Object.assign(e, props || {});
  (children || []).forEach(c => e.append(c));
  return e;
}

function card(title, description, url, meta) {
  return el("article", { className: "card" }, [
    el("h3", {}, [el("a", { href: url, target: "_blank", rel: "noopener noreferrer", textContent: title })]),
    el("p", { textContent: description || "No description." }),
    el("small", { textContent: meta || "" })
  ]);
}

function render() {
  const work = document.getElementById("work-list");
  PORTFOLIO.work.forEach(w => work.append(card(w.title, w.description, w.url)));
  if (!PORTFOLIO.work.length) { work.previousElementSibling.remove(); work.remove(); }

  const tl = document.getElementById("timeline-list");
  PORTFOLIO.timeline.forEach(t => tl.append(el("li", {}, [
    el("strong", { textContent: t.period }),
    el("h3", { textContent: t.title }),
    el("em", { textContent: t.place || "" }),
    el("p", { textContent: t.description || "" })
  ])));

  const list = document.getElementById("repo-list");
  fetch(`https://api.github.com/users/${PORTFOLIO.githubUser}/repos?sort=updated&per_page=100`)
    .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(repos => {
      list.textContent = "";
      repos.filter(r => !r.fork && r.name.toLowerCase() !== PORTFOLIO.githubUser.toLowerCase())
        .forEach(r => list.append(card(r.name, r.description, r.html_url,
          [r.language, "★ " + r.stargazers_count].filter(Boolean).join(" · "))));
      if (!list.children.length) list.textContent = "No public repositories yet.";
    })
    .catch(() => {
      list.textContent = "Could not load projects from GitHub. ";
      list.append(el("a", { href: `https://github.com/${PORTFOLIO.githubUser}`, textContent: "View on GitHub" }));
    });
}
render();
