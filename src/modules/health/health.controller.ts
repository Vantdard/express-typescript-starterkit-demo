import type { RequestHandler } from 'express';

export const getHealth: RequestHandler = (_req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
};
