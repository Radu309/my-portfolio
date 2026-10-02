# Radu Neacă - Personal Portfolio

Single-page portfolio built with React 19 and Vite 6. Live at
<https://radu309.github.io/my-portfolio/>.

## Development

```bash
npm install
npm run dev
```

Other scripts:

- `npm run build` - builds to `dist/`, then prerenders the page to static HTML (`scripts/prerender.js`)
- `npm run preview` - serves the production build locally
- `npm run lint` - runs ESLint

## Structure

- `src/components/` - one component per page section
- `src/styles/` - one stylesheet per component, scoped under the section id
- `src/data/` - content: work experience, education and projects
- `src/utils/asset.js` - resolves files from `public/` against the Vite `base`
- `public/` - images, icons, CV, `robots.txt`, `sitemap.xml`

To update the content, edit the files in `src/data/` (and `Skills.jsx` for the skill list).
Total experience and the displayed periods are computed from the `startDate` / `endDate` fields.

## Deployment

Every push to `master` is built and published to GitHub Pages by
`.github/workflows/static.yml`.

If the site moves to another URL, update:

- `base` in `vite.config.js`
- the canonical, Open Graph and JSON-LD URLs in `index.html`
- `public/robots.txt` and `public/sitemap.xml`

## Contact form

The form sends email through [EmailJS](https://www.emailjs.com/). The service, template and
public key ids are in `src/components/ContactMe.jsx`.
