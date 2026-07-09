import type { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

import { logger } from '../utils/logger.js';

export const errorMiddleware: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof ZodError) {
    return res.status(400).json({
      message: 'Validation error',
      issues: error.flatten().fieldErrors
    });
  }

  logger.error('Unhandled application error', {
    message: error instanceof Error ? error.message : String(error)
  });

  return res.status(500).json({
    message: 'Internal server error'
  });
};
