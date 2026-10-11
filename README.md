# Portfolio

HBO-ICT Cyber Security student | Interested in Cyber Security, Software Development & Technology

## What this is

This repository contains my personal portfolio website. It is designed as a landing page to present:

- my GitHub projects
- my CV
- a short introduction about me
- contact links

The style is based on a dark cyber / forensic theme with a clean, technical look.

## How to get in

You can view the website by opening the deployed page or by running it locally.

### Local setup

1. Clone the repository:

```bash
git clone https://github.com/Stephano-van-Beek/Portfolio.git
cd Portfolio
```

2. Open `index.html` in your browser.

If you use a local server, you can run one with for example:

```bash
python -m http.server 8000
```

Then go to:

```bash
http://localhost:8000
```

## Structure

```
index.html      home (latest 3 projects)
projects.html   all repos in two blocks: MBO and other (auto-loaded from GitHub)
about.html      About me + CV page
css/            style.css (theme) + portfolio.css (additions)
js/             main.js (nav/footer) + repos.js (GitHub loader)
assets/         cv.pdf goes here
```

## Customization

- GitHub username and MBO topic: top of `js/repos.js`
- New repositories appear automatically; repos with "mbo" in the name (or the topic `mbo`) go in the MBO block on the Projects page
- CV: put `assets/CV_Stephano.pdf` and `assets/CV_Stephano.docx` and edit `html/about.html`
- Colors: variables at the top of `css/style.css`
