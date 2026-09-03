# Pafuli Studio

The bilingual public website for [pafuli.studio](https://pafuli.studio), the games and interactive practice operated by Studio Pafuli Inc.

## Local development

```bash
npm install
npm run dev
```

The site uses Next.js static export. `npm run verify` runs linting, TypeScript checks, and the production build. Every push to `main` deploys the generated `out/` directory to GitHub Pages.

## Before launch

- Public studio contact is `t@pafuli.studio`; the site has no contact form or file upload.
- Add confirmed store, video, or platform links only on the corresponding game page.
- Point the apex domain `pafuli.studio` to GitHub Pages and verify the custom domain in repository settings.
- Update the reviewed date when legal or accessibility copy changes materially.
