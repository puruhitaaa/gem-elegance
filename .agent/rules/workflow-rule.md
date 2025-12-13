---
trigger: always_on
---

# Copilot Instructions

## Project overview

- Next.js 16 App Router frontend; backend served via Elysia and mounted into the Next API catch-all at [src/app/api/[...slugs]/route.ts](src/app/api/[...slugs]/route.ts). The Elysia app is prefixed with `/api` in [src/server/index.ts](src/server/index.ts), so server routes should be defined there.
- Authentication uses Better-Auth with Drizzle adapter and Postgres schema in [src/server/db/auth-schema.ts](src/server/db/auth-schema.ts); the Better-Auth server config lives in [src/server/better-auth/config.ts](src/server/better-auth/config.ts) and is mounted via [src/server/better-auth/index.ts](src/server/better-auth/index.ts). Client helpers live in [src/server/better-auth/client.ts](src/server/better-auth/client.ts) and the cached session helper in [src/server/better-auth/server.ts](src/server/better-auth/server.ts).
- Database access goes through Drizzle with a pooled postgres-js client cached for dev HMR in [src/server/db/index.ts](src/server/db/index.ts); schema is re-exported from [src/server/db/schema.ts](src/server/db/schema.ts).
- The default page is a starter placeholder in [src/app/page.tsx](src/app/page.tsx); layout/theme wiring is in [src/app/layout.tsx](src/app/layout.tsx) with a thin wrapper around next-themes in [src/components/ThemeProvider.tsx](src/components/ThemeProvider.tsx).
- Type-safe client for the Elysia API is generated at runtime with Eden treaty in [src/lib/eden.ts](src/lib/eden.ts); server type is exported from [src/server/index.ts](src/server/index.ts).

## Environment & configuration

- Env validation uses @t3-oss/env-nextjs in [src/env.mjs](src/env.mjs). Required server vars: `DATABASE_URL`, `NODE_ENV`, `BETTER_AUTH_SECRET` (optional in dev), `BETTER_AUTH_GOOGLE_CLIENT_ID`, `BETTER_AUTH_GOOGLE_CLIENT_SECRET`.
- Drizzle config at [drizzle.config.ts](drizzle.config.ts) points to [src/server/db/schema.ts](src/server/db/schema.ts) and sets `tablesFilter: ["nextbet-shadlysia_*"]`. Update this if you change the DB naming convention.
- Next config enables the React Compiler in [next.config.ts](next.config.ts). Path alias `@/*` maps to `src/*` via [tsconfig.json](tsconfig.json).

## Auth specifics

- Better-Auth is enabled for email/password and Google OAuth. Plugins enabled: admin, phone number OTP (sendOTP currently console.logs and must be replaced with a real SMS provider), username validation (6-20 chars), and haveibeenpwned password check. Update [src/server/better-auth/config.ts](src/server/better-auth/config.ts) when adjusting flows.
- Session retrieval for Next middleware/server uses `auth.api.getSession` with Next headers cache in [src/server/better-auth/server.ts](src/server/better-auth/server.ts). Client-side auth hooks/components should come from the Better-Auth React client in [src/server/better-auth/client.ts](src/server/better-auth/client.ts).
- Proxy guard in [src/proxy.ts](src/proxy.ts) is a naive redirect example; enforce route-level checks instead of relying on it for security.

## Data layer

- Drizzle schema currently only includes Better-Auth tables in [src/server/db/auth-schema.ts](src/server/db/auth-schema.ts). Add new tables there and export through [src/server/db/schema.ts](src/server/db/schema.ts).
- Use the shared `db` export from [src/server/db/index.ts](src/server/db/index.ts) for queries. Connection is cached in dev; avoid creating new clients elsewhere.

## API/server patterns

- Add Elysia routes by extending the `app` in [src/server/index.ts](src/server/index.ts). Because the Next route simply forwards methods to `app.fetch`, any HTTP verb you support must be registered on the Elysia side.
- When adding new endpoints, keep the `/api` prefix in mind since the app is mounted with `prefix: "/api"`.
- For typed client calls, import `api` from [src/lib/eden.ts](src/lib/eden.ts); it uses `NEXT_PUBLIC_API_URL` on the server and relative paths in the browser.

## Frontend patterns

- Tailwind CSS v4 is in use; utility classes are merged with `cn` helper in [src/lib/utils.ts](src/lib/utils.ts). Fonts are configured via Geist in [src/app/layout.tsx](src/app/layout.tsx).
- Theme toggling is provided by next-themes wrapper in [src/components/ThemeProvider.tsx](src/components/ThemeProvider.tsx); body classes apply `bg-background`/`text-foreground` based on theme.

## Commands & workflows

- Start dev server: `npm run dev`.
- Generate Better-Auth artifacts: `npm run ba:generate` (config at [src/server/better-auth](src/server/better-auth)).
- Drizzle: `npm run db:generate` for migrations, `npm run db:migrate` to apply, `npm run db:push` for prototyping.
- Lint/format with Biome: `npm run lint` / `npm run format`. Typecheck: `npm run typecheck`.

## Contribution tips for agents

- Prefer server logic inside Elysia under [src/server](src/server); avoid Next route handlers with inline logic.
- Reuse shared clients/helpers (`db`, `auth`, `api`, `cn`) instead of reconfiguring libraries per module.
- Keep env access typed through `env` from [src/env.mjs](src/env.mjs); do not read `process.env` directly elsewhere.
