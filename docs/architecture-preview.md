# Architecture Preview

This public audit demo exposes the same core engineering style used by the commercial VS Code Project StarterKit V1, while intentionally excluding premium application-module content.

## Core Responsibilities

```text
src/
  app.ts
  server.ts
  config/
    env.ts
  middlewares/
    error.middleware.ts
    validate.middleware.ts
  modules/
    health/
      health.controller.ts
      health.routes.ts
  routes/
    index.ts
  utils/
    logger.ts
```

## Design Principles Demonstrated

- `app.ts` creates and configures the Express application.
- `server.ts` starts the HTTP server.
- `routes/index.ts` is the central API router.
- `config/env.ts` validates and exports typed configuration.
- Middleware is explicit and small.
- Error responses are centralized and safe.
- Request validation is schema-driven through Zod.
- The Health module demonstrates simple route/controller separation.

## Commercial Version Difference

The commercial package includes the complete reference application module and full buyer documentation. Those files are intentionally not included here so the paid product keeps its commercial value.
