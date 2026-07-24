<p align="center">
  <img
    src=".github/assets/starterkit-cover.webp"
    alt="Express + TypeScript StarterKit"
    width="100%"
  />
</p>

<h1 align="center">
Express + TypeScript StarterKit
</h1>

<p align="center">
A production-ready backend foundation built with Express, TypeScript, Zod, Vitest and modular architecture.
</p>

<p align="center">

<a href="https://vantdard.com/products/express-typescript-starterkit">
🌐 Product
</a>

------------------------

<a href="https://vantdard.com">
Website
</a>

------------------------

<a href="#quick-start">
Quick Start
</a>

------------------------

<a href="#documentation">
Documentation
</a>

------------------------

<a href="#feedback">
Feedback
</a>

</p>

---

# Public Audit Demo

This repository is the official public audit edition of the commercial **Express + TypeScript StarterKit** developed by **Vantdard**.

It allows developers to inspect the project architecture, run the application, execute the automated test suite and evaluate the engineering quality before purchasing the complete commercial package.

The goal is transparency.

The repository contains real production-quality code rather than screenshots or simplified examples.

---

# Included in the Demo

## Application Foundation

- Express application/server separation
- Central API router
- Health endpoint
- Helmet
- CORS
- Request parsing middleware

## Typed Configuration

- dotenv
- Zod runtime validation
- Typed configuration

## Reliability

- Global error middleware
- Request validation middleware
- Structured application architecture
- Predictable error handling

## Quality Tooling

- TypeScript
- ESLint
- Prettier
- Vitest
- Supertest

---

# Quality Evidence

This repository is designed to be verified, not simply described.

Run the complete quality pipeline locally.

```bash
npm run lint
npm run test
npm run build
npm audit
```

Everything included in this repository is runnable.

---

# Quick Start

Install dependencies.

```bash
npm install
```

Create your environment file.

Linux / macOS

```bash
cp .env.example .env
```

Windows PowerShell

```powershell
copy .env.example .env
```

Start the development server.

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

---

# Project Structure

```text
src/
├── app.ts
├── server.ts
├── config/
├── middlewares/
├── modules/
│   └── health/
├── routes/
└── utils/

tests/

docs/
```

---

# Public Demo vs Commercial Package

| Feature | Public Demo | Commercial |
|----------|:-----------:|:----------:|
| Express foundation | ✅ | ✅ |
| TypeScript | ✅ | ✅ |
| Zod configuration | ✅ | ✅ |
| Validation middleware | ✅ | ✅ |
| Health endpoint | ✅ | ✅ |
| Automated tests | ✅ | ✅ |
| Example application module | — | ✅ |
| Buyer onboarding documentation | — | ✅ |
| Full architecture documentation | — | ✅ |
| VS Code workspace configuration | — | ✅ |
| Commercial license | — | ✅ |
| Commercial release package | — | ✅ |

---

# Documentation

- Architecture Preview
- Validation Results
- Commercial Package Preview
- FAQ

---

# Feedback

This repository exists to make the project technically transparent.

If you find something that can be improved, feel free to open a GitHub Issue.

Constructive feedback about architecture, documentation, developer experience or code quality is always welcome.

---

# About Vantdard

Vantdard builds engineering software designed to remain valuable for years.

Our philosophy is simple.

- Reliability over hype.
- Simplicity over complexity.
- Engineering-first design.
- Long-term maintainability.
- Consistent developer experience.

Website:

https://vantdard.com

---

<p align="center">

Built with precision.

Designed for the long term.

</p>
