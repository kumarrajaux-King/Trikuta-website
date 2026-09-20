# Deploying the Trikuta site

## The honest constraint

I can read from a GitHub repo but I cannot write to one. There is no way for me
to push changes here straight into your repository. The file transfer is one
manual step; everything after it is scripted.

## One-time setup

```bash
git clone git@github.com:<you>/<your-repo>.git trikuta
cd trikuta
chmod +x deploy.sh
```

Then turn on hosting once:

**GitHub Pages** — repo Settings → Pages → Source: `main`, folder `/ (root)`.
Your site lands at `https://<you>.github.io/<your-repo>/Home.dc.html`.

**Netlify or Vercel** — "Import from Git", pick the repo, leave the build
command empty and the publish directory as the root. These are static files;
there is nothing to build.

## Every time you want the latest design live

1. Ask me for the download here and unzip it over your local clone.
2. Run:

```bash
./deploy.sh "new coaches section"
```

That stages, commits and pushes. Your host picks it up and redeploys on its own,
usually inside a minute.

## Making Home the landing page

Hosts look for `index.html`. Add a redirect once and it stays:

```bash
printf '<!doctype html><meta http-equiv="refresh" content="0;url=Home.dc.html">' > index.html
```

Commit it with the rest.

## What must ship together

- The eight `*.dc.html` pages
- `support.js` — the runtime the pages load
- `ds-base.js` and the `_ds/` folder — design system tokens and components
- `assets/` — logo, hero video, coach portrait, fonts
- `image-slot.js` — the drag-and-drop photo frames

Leave any of these out and pages will load blank or unstyled. `screenshots/` and
`uploads/` are working files and can be dropped.

## If you would rather not ship the runtime

I can flatten each page into a single self-contained HTML file with everything
inlined — no `support.js`, no `_ds/` folder, one file per page. Ask and I will
build it. The trade-off is that those files are outputs, not sources: you would
keep editing here and re-export, rather than editing them by hand.
