# Sanket Tank - Portfolio

Personal portfolio for Sanket Tank, a full-stack engineer focused on web performance, frontend architecture, real-time systems, and developer tooling.

- `/` - Signal Ledger portfolio built with Next.js 16 and React 19.
- `/v1/` - Noindex archive of the previous portfolio.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Bun for dependency management and scripts
- React Three Fiber and Three.js
- Custom CSS design system with light and dark themes

## Local development

Requires Node.js 22 or newer and Bun 1.3.

```bash
bun install
bun run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
bun run typecheck
bun run lint
bun run build
```

Run the production build locally with:

```bash
bun run start
```

## Deployment

The site is deployed on Vercel.

1. Import the repository into Vercel.
2. Keep the framework preset as Next.js.
3. Use `bun install` for dependencies and `bun run build` for the build.
4. Add the production domain in the Vercel project settings.

No static export step or GitHub Pages configuration is required. If the production domain changes, update the Open Graph URL in `app/(portfolio)/layout.tsx` and the site URL in `app/sitemap.ts` and `app/robots.ts`.
