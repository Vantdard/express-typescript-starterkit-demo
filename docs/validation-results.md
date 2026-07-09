# Validation Results

This public audit demo is intended to support the same core validation workflow as the commercial StarterKit foundation.

## Supported Commands

```bash
npm install
npm run lint
npm run test
npm run build
npm audit
npm run dev
```

## Expected Validation Status

- `npm install`: installs dependencies from `package-lock.json`.
- `npm run lint`: validates code quality with ESLint.
- `npm run test`: runs the Vitest test suite.
- `npm run build`: compiles TypeScript to `dist/`.
- `npm audit`: checks installed dependencies for known vulnerabilities.
- `npm run dev`: starts the audit demo API.

## Runtime Check

```text
GET /api/health
```

Expected response shape:

```json
{
  "status": "ok",
  "uptime": 1,
  "timestamp": "2026-01-01T00:00:00.000Z"
}
```

`uptime` and `timestamp` are runtime values and will change on each request.
