# Flanders Make Academy — Mock Demo

This is a small React + Vite mock application demonstrating the requested flows:
- Homepage with transition paths, upcoming and recently added items.
- Transition path landing pages with intro video when unauthenticated, capability navigator + personalized course list when authenticated.
- Company owner view (financial/plan/certificates mock).
- Employee view with capability navigator and personalized trajectory.
- Coordinator/admin view with KPIs.
- Course detail pages, search (logs keyword), feedback modal.

Run locally:
1. npm install
2. npm run dev
3. Open http://localhost:5173

Notes:
- Auth is mocked. Use header buttons "Sign in as employee / company / admin" to switch roles.
- Replace `/logo-fm.png` in `public/` with your branded logo.
- All content is placeholder / dummy data in `src/data/mockData.ts`.

Next steps:
- Replace dummy text and course metadata with real content.
- Add your Flanders Make branding assets and fine-tune styling.
- Persist analytics search terms and feedback to a backend (or a simple server) to collect user behavior.
- If you want, I can push this to a GitHub repo for you and set up GitHub Pages / Netlify preview.
