import express from 'express';
import request from 'supertest';
import { describe, expect, it, vi } from 'vitest';
import { z } from 'zod';

import { errorMiddleware } from '../../src/middlewares/error.middleware.js';
import { logger } from '../../src/utils/logger.js';

const createTestApp = (error: unknown) => {
  const app = express();

  app.get('/error', (_req, _res, next) => {
    next(error);
  });

  app.use(errorMiddleware);

  return app;
};

describe('error middleware', () => {
  it('returns a predictable validation error response', async () => {
    const validationError = z
      .object({ name: z.string() })
      .safeParse({}).error;

    const response = await request(createTestApp(validationError)).get('/error');

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: 'Validation error',
      issues: {
        name: ['Required']
      }
    });
  });

  it('returns a safe response for unexpected errors', async () => {
    vi.spyOn(logger, 'error').mockImplementation(() => undefined);

    const response = await request(createTestApp(new Error('Database password leaked'))).get(
      '/error'
    );

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: 'Internal server error'
    });
    expect(response.text).not.toContain('Database password leaked');
  });

  it('logs unexpected errors for diagnostics', async () => {
    const errorSpy = vi.spyOn(logger, 'error').mockImplementation(() => undefined);

    await request(createTestApp(new Error('Unexpected failure'))).get('/error');

    expect(errorSpy).toHaveBeenCalledWith('Unhandled application error', {
      message: 'Unexpected failure'
    });
  });
});
