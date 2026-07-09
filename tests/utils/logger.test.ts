import { afterEach, describe, expect, it, vi } from 'vitest';

import { logger } from '../../src/utils/logger.js';

describe('logger', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('writes info messages with a consistent prefix', () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => undefined);

    logger.info('Application started');

    expect(logSpy).toHaveBeenCalledWith('[info] Application started');
  });

  it('writes error messages with a consistent prefix', () => {
    const errorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);

    logger.error('Application failed');

    expect(errorSpy).toHaveBeenCalledWith('[error] Application failed');
  });

  it('serializes log metadata when provided', () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => undefined);

    logger.info('Server running', { port: 3000 });

    expect(logSpy).toHaveBeenCalledWith('[info] Server running {"port":3000}');
  });

  it('does not throw when metadata cannot be serialized', () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const circularMeta: Record<string, unknown> = {};
    circularMeta.self = circularMeta;

    expect(() => logger.info('Circular metadata', circularMeta)).not.toThrow();
    expect(logSpy).toHaveBeenCalledWith(
      '[info] Circular metadata {"meta":"[unserializable]"}'
    );
  });
});
