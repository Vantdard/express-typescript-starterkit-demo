import express from 'express';
import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { z } from 'zod';

import { errorMiddleware } from '../../src/middlewares/error.middleware.js';
import { validate } from '../../src/middlewares/validate.middleware.js';

const createTestApp = () => {
  const app = express();

  const schema = z.object({
    body: z.object({
      name: z.string().trim().min(2)
    }),
    params: z.object({
      id: z.string().regex(/^\d+$/)
    }),
    query: z.object({
      includeDetails: z.enum(['true', 'false']).optional()
    })
  });

  app.use(express.json());
  app.post('/items/:id', validate(schema), (req, res) => {
    res.status(200).json({
      body: req.body,
      params: req.params,
      query: req.query
    });
  });
  app.use(errorMiddleware);

  return app;
};

describe('validation middleware', () => {
  it('passes parsed request data to the handler', async () => {
    const response = await request(createTestApp())
      .post('/items/123?includeDetails=true')
      .send({ name: '  Ada  ' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      body: { name: 'Ada' },
      params: { id: '123' },
      query: { includeDetails: 'true' }
    });
  });

  it('returns a validation error before the handler runs', async () => {
    const response = await request(createTestApp())
      .post('/items/invalid')
      .send({ name: 'A' });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Validation error');
    expect(response.body.issues).toHaveProperty('body');
    expect(response.body.issues).toHaveProperty('params');
  });
});
