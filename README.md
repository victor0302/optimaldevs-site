# OptimalDevs company website

React 19, Vite, React Router, and Tailwind CSS. The site presents OptimalDevs' software, data, analytics, automation, and website services, alongside its Business Brain platform in active development: a unified direction for business data, organizational knowledge, and intelligence.

## Development

```sh
npm ci
cp .env.example .env.local
npm run dev
```

`VITE_CONTACT_API_ENDPOINT` is embedded at build time. The example points to the existing production API Gateway/Lambda/SES contact service. Use a staging or mocked endpoint when testing submissions; do not send test messages to production unintentionally.

```sh
npm run lint
npm run build
npm run preview
```

No formatter, type-check, or test scripts are currently configured. See [implementation and verification notes](docs/site-repositioning.md) for the browser checks performed for this update.

## Routes and content

Primary routes: `/`, `/services`, `/platform`, `/about`, `/contact`. The footer also links to `/privacy`. Existing `/team`, `/portfolio`, and `/partnership` routes remain available.

- Service content: `src/data/services.js`
- Existing team information: `src/data/team.js`
- Platform direction: `src/pages/Platform.jsx`
- Shared metadata: `src/components/ui/PageMeta.jsx`
- Design tokens: `src/index.css` and `tailwind.config.js`

The Inter font is served locally from `public/fonts/`, with its SIL Open Font License. The Latin variable font comes from `@fontsource-variable/inter` 5.3.0; this is an asset, not an added npm dependency.

## Deployment

The existing GitHub Actions workflow lints, builds, and deploys `dist/` to S3/CloudFront on pushes to `main`. It supplies the contact endpoint at build time. The existing Vercel configuration also includes a SPA rewrite.

CloudFront must retain its existing SPA fallback to `index.html` for direct client routes such as `/platform`. The live distribution's routing configuration is not managed in this repository. Verify direct route loading on staging before deployment; no AWS resources or deployment configuration were changed here.
