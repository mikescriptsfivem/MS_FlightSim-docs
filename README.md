# MikeScripts Docs

Public documentation for MikeScripts FiveM resources, built with [VitePress](https://vitepress.dev).

**Read it online: https://mikescriptsfivem.github.io/MS_FlightSim-docs/**

## Editing

Pages are Markdown files: `ms-flightsim/*.md` for MS_FlightSim, `index.md` for the home page. The sidebar is in `.vitepress/config.mts`.

```sh
npm install
npm run docs:dev      # live preview at http://localhost:5173/MS_FlightSim-docs/
npm run docs:build    # production build into .vitepress/dist
```

To publish, build and push the output to the `gh-pages` branch (GitHub Pages serves that branch):

```sh
npm run docs:build
cd .vitepress/dist && touch .nojekyll
git init -b gh-pages && git add -A && git commit -m deploy
git push -f https://github.com/mikescriptsfivem/MS_FlightSim-docs.git gh-pages
```
