import type { NextFunction, Request, Response } from 'express';
import type { AnyZodObject } from 'zod';

export const validate =
  (schema: AnyZodObject) => (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query
    });

    if (!result.success) {
      next(result.error);
      return;
    }

    req.body = result.data.body;
    req.params = result.data.params;
    req.query = result.data.query;
    next();
  };
