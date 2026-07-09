import express from 'express';
import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { app } from '../../src/app.js';

describe('core middleware', () => {
  it('applies security headers to HTTP responses', async () => {
    const response = await request(app).get('/unknown-route');

    expect(response.headers['x-content-type-options']).toBe('nosniff');
  });

  it('applies CORS headers to HTTP responses', async () => {
    const response = await request(app).get('/unknown-route');

    expect(response.headers['access-control-allow-origin']).toBe('*');
  });

  it('parses JSON request bodies', async () => {
    const testApp = express();
    testApp.use(express.json());
    testApp.post('/echo', (req, res) => res.status(200).json(req.body));

    const response = await request(testApp).post('/echo').send({ name: 'Ada Lovelace' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ name: 'Ada Lovelace' });
  });

  it('parses URL encoded request bodies', async () => {
    const testApp = express();
    testApp.use(express.urlencoded({ extended: true }));
    testApp.post('/echo', (req, res) => res.status(200).json(req.body));

    const response = await request(testApp)
      .post('/echo')
      .type('form')
      .send('name=Grace%20Hopper');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ name: 'Grace Hopper' });
  });
});
