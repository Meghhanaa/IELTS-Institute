# IELTS Institute — Home Page (Vite + React + Tailwind)

## What this is
A modern, responsive single-page home page built with React (Vite) and Tailwind CSS. Component-based structure, accessible markup, and small micro-interactions (hover states + theme switch).

## Quick setup (step-by-step)
1. **Download & extract** the project ZIP (or `git clone` if you have a repo).
2. Open a terminal and `cd` into the project folder:
   ```bash
   cd ielts-institute
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```
   Vite will print a local URL (usually http://localhost:5173). Open that in your browser.
5. Build for production:
   ```bash
   npm run build
   ```
6. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Notes & design choices
- Uses **Tailwind CSS** for utility-first responsive styling and rapid iteration.
- Theme toggle stores preference in `localStorage` and toggles the `dark` class on `<html>` for Tailwind dark mode.
- Semantic HTML and ARIA-friendly controls (nav landmarks, alt attributes, visible focus states).
- Images are hotlinked from Unsplash for convenience — replace with local assets for production.

## Deployment (Vercel / Netlify)
- **Vercel**: import the project repo, set framework as `Vite`, build command `npm run build`, output directory `dist` — then deploy.
- **Netlify**: drag-and-drop the `dist` folder after `npm run build`, or connect the GitHub repo and set build command `npm run build` and publish directory `dist`.

## Troubleshooting
- Ensure Node.js 16+.
- If you see a module parsing error, ensure you're running the project via Vite (`npm run dev`) and not a different bundler (e.g., old Webpack config).
- If Tailwind utilities don't work, ensure you installed the `postcss` deps and that `tailwind.config.cjs` `content` paths include `./src/**/*.{js,jsx,ts,tsx}` and `./index.html`.

## Customize
- Replace text, images and colors in `src/components/*`.
- Add animations with `framer-motion` or CSS transitions.

---
Good luck — if you want, I can push this to a GitHub repo for you or deploy it to Vercel right now. Let me know which option you prefer.