# be spex – website

The site at https://be-spex.github.io: what be spex is and which apps there are.
Static pages built with [Astro](https://astro.build); no tracking, no cookies, fonts served from here.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # into dist/
```

## Adding an app

1. Add an entry to [`src/data/apps.ts`](src/data/apps.ts): name, what it is in two or three words, one
   sentence that tells a visitor what to expect, three highlights, the feature list, package and repository.
   With `group: "qiew"` it becomes a card in that group, without a group it gets a section of its own.
2. Put the icon into `public/icons/<slug>.svg`.
3. Put the screenshots into `public/shots/` as WebP – `<name>-light.webp` and `<name>-dark.webp` if the app
   follows the colour scheme. The first screenshot is the one on the home page: it has to make the impression.

The card or section on the home page, the app's page at `/<slug>/` and the install line come from that entry.
Version numbers and download links are read from the GitHub releases when the site is built.

## Layout

```
src/data/apps.ts        the apps and groups, with all their texts
src/pages/index.astro   home page
src/pages/[slug].astro  page of one app
src/components/         screenshot frame, app card, command block
src/styles/global.css   the one stylesheet
public/                 logo, icons, screenshots
```
