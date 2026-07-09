# VS Code Project StarterKit - Public Audit Demo

This repository is a public, runnable audit demo for the commercial VS Code Project StarterKit V1.

It exists so buyers can inspect real engineering quality before purchasing the full private ZIP package.

## What This Repository Is

This is a reduced but real version of the StarterKit foundation. It includes the core Express application, typed environment configuration, validation middleware, error handling, logging, the Health endpoint and real automated tests.

## What This Repository Is Not

This is not the full commercial product.

The commercial package includes additional buyer-facing documentation, the complete example application module, distribution materials and the finalized commercial package contents.

## Included In This Public Demo

- Express app/server separation.
- Central API router under `/api`.
- Helmet, CORS and request parsing middleware.
- Typed environment configuration with dotenv and Zod.
- Simple console logger.
- Zod validation middleware.
- Global error middleware.
- Health endpoint.
- Real tests with Vitest and Supertest.
- TypeScript, ESLint and Prettier configuration.

## Reserved For The Commercial Version

- Complete Users example module.
- Full buyer onboarding documentation.
- Full project structure documentation.
- Distribution checklist and commercial release package documentation.
- Commercial license file.
- VS Code workspace recommendations.
- GitHub Actions workflow.
- Private strategy, roadmap and internal governance documents.

## Stack

- Node.js 20+
- TypeScript
- Express
- Zod
- Vitest
- Supertest
- ESLint
- Prettier
- npm

## Quick Start

Install dependencies:

```bash
npm install
```

Create your environment file:

```bash
cp .env.example .env
```

Windows PowerShell:

```powershell
copy .env.example .env
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000/api/health
```

Expected response shape:

```json
{
  "status": "ok",
  "uptime": 1,
  "timestamp": "2026-01-01T00:00:00.000Z"
}
```

`uptime` and `timestamp` change on each request.

## Quality Checks

```bash
npm run lint
npm run test
npm run build
npm audit
```

## Available Endpoint

```text
GET /api/health
```

## Public Demo Structure

```text
src/
  app.ts
  server.ts
  config/
  middlewares/
  modules/
    health/
  routes/
  utils/
tests/
docs/
```

## Why The Full Source Is Private

VS Code Project StarterKit is a commercial product. This public repo is intentionally scoped to provide technical confidence without redistributing the full paid package.

The paid package is designed for developers who want a clean, professional Express + TypeScript foundation they can own, modify and use in real projects.

## Documentation

- [Architecture Preview](docs/architecture-preview.md)
- [Validation Results](docs/validation-results.md)
- [Commercial Package Preview](docs/commercial-package-preview.md)
- [FAQ](docs/faq.md)
