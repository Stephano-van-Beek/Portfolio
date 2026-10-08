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

## Files

- `index.html` — main landing page
- `style.css` — visual styling
- `script.js` — loads public GitHub repositories
- `cv.pdf` — your CV file, place this in the root of the repository

## Customization

You can edit the following parts to make it your own:

- personal introduction text
- GitHub username in `script.js`
- contact details
- CV file
- colors and layout in `style.css`

## Notes

- The repositories section uses the GitHub API to show your public repositories.
- The CV download button will work once `cv.pdf` is added to the repository.
