import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { app } from '../../src/app.js';

describe('HTTP foundation', () => {
  it('handles requests through the Express application without starting the server', async () => {
    const response = await request(app).get('/unknown-route');

    expect(response.status).toBe(404);
  });
});
