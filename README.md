# Jehan AlBuainain — Portfolio 

The full personal portfolio site, rebuilt from static HTML/CSS/JS into
React + Vite — same tooling as the Ops Desk and Recipe Finder projects
in this portfolio, so the site itself now matches the stack it
showcases.

Every section, every piece of content, every interactive feature from the
original site is here: dark mode, full English/Arabic (RTL) translation,
the intro preloader, the orbiting-tech-icon avatar, the 3D-tilt project
cards, the scroll-driven timeline, the custom cursor, and the Formspree
contact form.

## Run it locally

```bash
npm install
npm run dev
```

## Project structure

```
src/
  data/            # projects, tech stack, certifications, testimonials,
                    # timeline, work items — each entry has { en, ar } text
  i18n/
    translations.js       # all static UI strings (nav, headings, buttons...)
    LanguageContext.jsx   # React context + useLanguage() hook (t, pick, toggle)
  hooks/           # one hook per piece of interactivity:
    useTheme.js            # dark/light mode, persisted
    usePreloader.js        # intro screen timing
    useScrollProgress.js   # top progress bar
    useScrollY.js          # raw scroll position (back-to-top button)
    useActiveSection.js    # highlights the current nav link
    useReveal.js           # IntersectionObserver fade-in-on-scroll
    useCounter.js          # animated number counting (stats bar)
    useCustomCursor.js     # the dot + trailing ring cursor
    useTilt.js              # 3D tilt on project card hover
    useTimelineProgress.js # the growing line down the experience timeline
  components/      # one component per section (Hero, Services, Projects...)
  assets/          # avatar + Ops Desk + Recipe Finder screenshots (real
                    # image files now, not the base64 strings from before)
  styles.css       # ported directly from the original site — same class
                    # names throughout, so the CSS needed almost no changes
```

## Why this structure

- **Data-driven, not hand-typed JSX**: all 8 personal projects, the tech
  stack icons, certifications, testimonials, and the 10 "Professional
  Work" items live in `src/data/*.js` as arrays, and each component just
  `.map()`s over them. Adding another project means adding one object to
  `projects.js` — no JSX to duplicate.
- **Real i18n, not DOM string-swapping**: the original site used
  `data-ar` / `data-ar-html` attributes and vanilla JS to swap
  `textContent` at runtime. This version uses a proper `LanguageContext`
  — components call `t('key')` for static strings or `pick(field)` for
  data-object strings, and React just re-renders. Same visual result,
  cleaner underlying pattern.
- **Every visual effect is a small, named hook** instead of one long
  `script.js` — `useTilt`, `useCustomCursor`, `useReveal`, etc. Each does
  one thing and can be reused or dropped independently.
- **Projects display as a unified bento grid** (`ProjectTile.jsx`): 2
  large tiles, 2 medium, 4 small — one component handles every size via
  a `size` field on each project object, instead of separate
  "featured" and "list" components with duplicated logic.

## What was actually verified here (and what wasn't)

This project was converted and iterated on in an environment with **no
live browser and no internet access** for most of the work. Every
JS/JSX file is checked for syntax errors and CSS brace balance after
each edit, and hooks/components referenced in docs are confirmed to
actually exist and be wired up. That said, **this never replaces
opening it in a real browser** — several real bugs (a missing `useTilt`
hook, a broken image aspect ratio, a mobile header padding issue) were
only caught because the live site was tested by hand and screenshots
were shared back. Keep testing changes in the browser before trusting
them.

## How this site is actually deployed

Live at **https://jehanab.github.io/** via GitHub Pages, using the
GitHub Actions workflow at `.github/workflows/deploy.yml`. On every push
to `main`, it runs `npm install` + `npm run build` and publishes the
`dist/` folder automatically — no manual build step, no dragging
folders anywhere. The repo is named `jehanab.github.io` specifically so
the site lives at the root domain instead of a `/repo-name/` subpath.

To deploy a fork or a copy of this elsewhere (Vercel, Netlify, etc.),
any static host that runs `npm run build` and serves `dist/` will work
the same way.

## The "Resume" button

Under the Experience & Education section, the Resume button links to
`/Jehan-AlBuainain-CV.pdf`, served from the `public/` folder. To update
the CV, replace that file (keeping the exact filename — GitHub Pages
URLs are case-sensitive) and push.

## One thing to double check yourself

The Formspree endpoint (`https://formspree.io/f/mqerbpoo`) was carried
over as-is from your live site. Confirm it's still the correct, active
endpoint for your account before relying on the contact form.
