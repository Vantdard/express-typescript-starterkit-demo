import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { app } from '../src/app.js';

describe('GET /api/health', () => {
  it('returns the API health status', async () => {
    const response = await request(app).get('/api/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 'ok',
      uptime: expect.any(Number),
      timestamp: expect.any(String)
    });
    expect(response.body.uptime).toBeGreaterThanOrEqual(0);
    expect(Number.isNaN(Date.parse(response.body.timestamp))).toBe(false);
  });
});
