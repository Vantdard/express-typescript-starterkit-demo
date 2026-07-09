import { describe, expect, it } from 'vitest';

import { parseEnv } from '../../src/config/env.js';

describe('configuration environment', () => {
  it('uses explicit safe defaults', () => {
    const env = parseEnv({});

    expect(env).toEqual({
      PORT: 3000,
      NODE_ENV: 'development',
      CORS_ORIGIN: '*'
    });
  });

  it('parses valid environment values', () => {
    const env = parseEnv({
      PORT: '4000',
      NODE_ENV: 'test',
      CORS_ORIGIN: 'https://example.com'
    });

    expect(env.PORT).toBe(4000);
    expect(env.NODE_ENV).toBe('test');
    expect(env.CORS_ORIGIN).toBe('https://example.com');
  });

  it('returns immutable configuration', () => {
    const env = parseEnv({});

    expect(Object.isFrozen(env)).toBe(true);
  });

  it('rejects invalid ports', () => {
    expect(() => parseEnv({ PORT: '0' })).toThrow(/PORT/);
    expect(() => parseEnv({ PORT: '70000' })).toThrow(/PORT/);
    expect(() => parseEnv({ PORT: '3000.5' })).toThrow(/PORT/);
  });

  it('rejects invalid node environments', () => {
    expect(() => parseEnv({ NODE_ENV: 'staging' })).toThrow(/NODE_ENV/);
  });

  it('rejects empty CORS origins', () => {
    expect(() => parseEnv({ CORS_ORIGIN: '' })).toThrow(/CORS_ORIGIN/);
  });
});
