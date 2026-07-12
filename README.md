# Mekuanint Tewende — Portfolio (React + Tailwind + shadcn/ui)

This is a 1:1 conversion of the original Zain-based HTML/jQuery portfolio template into a
modern **React + TypeScript + Vite + Tailwind CSS + shadcn/ui** stack, keeping the same
visual design (colors, spacing, typography, layout, animations).

## Stack

- **React 18 + TypeScript** — component-based structure, one file per section
- **Vite** — dev server & build
- **Tailwind CSS** — all styling, using custom tokens (`gold`, `ink`, `void`, `panel`, `muted`)
  configured in `tailwind.config.ts` to match the original palette (`#c49b66`, `#161617`, `#0F0F0F`)
- **shadcn/ui-style components** — `src/components/ui/button.tsx`, `input.tsx`, `textarea.tsx`
  (hand-written in the shadcn convention: `cva` variants + `cn()` helper, so you can drop in
  more components from `npx shadcn@latest add ...` later)
- **lucide-react** — replaces Font Awesome icons

## jQuery plugins replaced

| Original plugin | React replacement |
|---|---|
| `scrollIt.js` (section nav + smooth scroll) | `useScrollSpy` hook + `scrollToSection` (`src/hooks/useScrollSpy.ts`) |
| `animated.headline.js` (`cd-headline`) | `AnimatedHeadline.tsx` — interval-based word rotation with the same CSS push-in/out animation |
| `isotope.pkgd.min.js` (portfolio filtering) | Plain React state filter in `Portfolio.tsx` |
| `jquery.magnific-popup` (image lightbox) | Minimal custom lightbox modal in `Portfolio.tsx` |
| `jquery.stellar.min.js` (parallax) | Not ported (subtle effect, safely dropped — can be re-added with a scroll-linked `transform` if desired) |
| `validator.js` + AJAX contact form | Native HTML5 `required` validation + `onSubmit` handler in `Contact.tsx` (stubbed — wire up your own POST endpoint) |

## Project structure

```
src/
  components/
    ui/            shadcn-style primitives (button, input, textarea)
    Navbar.tsx
    Hero.tsx
    AnimatedHeadline.tsx
    About.tsx
    Services.tsx
    Portfolio.tsx
    Blog.tsx
    Contact.tsx
    Footer.tsx
    Loader.tsx
  hooks/
    useScrollSpy.ts
  lib/
    utils.ts       cn() class-merge helper
  index.css        Tailwind layers + custom keyframes (headline push, preloader dots)
  App.tsx
  main.tsx
```

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to dist/
```

## Adding your images

The original template's images aren't included in this conversion. Create a `public/image`
folder and drop in your assets using these paths (already referenced in the components):

```
public/
  image/
    logo.png
    33.jpg              (hero background)
    mekuanint.png       (about photo)
    map.png             (contact background)
    blog/
      blog1.png blog2.png blog3.png
    portfolio/
      bmw.png event-booking.png ui.png full.png
      agency.png fuel-d.png apple.png
```

## Notes

- Colors, type scale, spacing, and section order match the original exactly — this was a
  faithful port, not a redesign.
- Tailwind's `container` is configured with the same breakpoints/gutters as the original
  Bootstrap container for consistent max-widths.
- Skill bars animate on scroll into view (`IntersectionObserver`) instead of the original
  scroll-position check.
