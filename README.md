# Jehan AlBuainain — Portfolio (React + Vite)

The full personal portfolio site, rebuilt from static HTML/CSS/JS into
React + Vite — same tooling as the Ops Desk, Recipe Finder, and Habit
Tracker projects in this portfolio, so the site itself now matches the
stack it showcases.

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

- **Data-driven, not hand-typed JSX**: all 10 projects, 19 tech icons, 8
  certifications, 3 testimonials, and 10 "Professional Work" items live in
  `src/data/*.js` as arrays, and each component just `.map()`s over them.
  Adding an 11th project means adding one object to `projects.js` — no
  JSX to duplicate.
- **Real i18n, not DOM string-swapping**: the original site used
  `data-ar` / `data-ar-html` attributes and vanilla JS to swap
  `textContent` at runtime. This version uses a proper `LanguageContext`
  — components call `t('key')` for static strings or `pick(field)` for
  data-object strings, and React just re-renders. Same visual result,
  cleaner underlying pattern.
- **Every visual effect is a small, named hook** instead of one long
  `script.js` — `useTilt`, `useCustomCursor`, `useReveal`, etc. Each does
  one thing and can be reused or dropped independently.

## What was actually verified here (and what wasn't)

This is a large project converted in an environment with **no live browser
and no internet access** — same constraint as the other three. Given the
size of this one, verification went further than usual:

1. **Every one of the 33 JS/JSX files** was parsed with `@babel/core`
   (JSX-aware, not just esbuild) — zero syntax errors.
2. **CSS brace balance** was verified after every edit (381 open / 381
   close as of the latest change).
3. Every hook referenced in this README was checked against the codebase
   to confirm it's both **defined and actually imported/used** by a
   component — including `useTilt`, which was previously documented but
   missing from the repo; it's now implemented in `src/hooks/useTilt.js`
   and wired into `FeaturedProject.jsx`.
4. **CSS class names referenced in JSX were spot-checked** against
   `styles.css` to confirm they exist.

**None of this replaces actually opening it in a browser.** No component
has been visually rendered, no click has been tested, and no responsive
breakpoint has been checked. Please run `npm run dev` and click through
every section — theme toggle, language toggle, mobile menu, project card
hover/tilt, the contact form — before treating this as finished.

## Deploy it live (free)

Same as always — Vercel (import the GitHub repo) or Netlify Drop
(`npm run build` → drag the `dist/` folder to
[app.netlify.com/drop](https://app.netlify.com/drop)).

## One thing to double check yourself

The Formspree endpoint (`https://formspree.io/f/mqerbpoo`) was carried
over as-is from your live site. Confirm it's still the correct, active
endpoint for your account before relying on the contact form.
