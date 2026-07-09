import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().int().positive().max(65535).default(3000),
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  CORS_ORIGIN: z.string().min(1).default('*')
});

export type Env = Readonly<z.infer<typeof envSchema>>;

export const parseEnv = (input: Record<string, unknown>): Env => {
  const parsedEnv = envSchema.safeParse(input);

  if (!parsedEnv.success) {
    const errors = parsedEnv.error.issues.map((issue) => {
      const path = issue.path.join('.') || 'env';

      return `- ${path}: ${issue.message}`;
    });

    throw new Error(`Invalid environment variables:\n${errors.join('\n')}`);
  }

  return Object.freeze(parsedEnv.data);
};

const loadEnv = (): Env => {
  try {
    return parseEnv(process.env);
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }
};

export const env = loadEnv();
