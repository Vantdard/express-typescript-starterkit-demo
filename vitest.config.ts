import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    exclude: ['node_modules/**', 'dist/**', 'coverage/**', 'release/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      exclude: ['node_modules/**', 'dist/**', 'coverage/**', 'release/**']
    }
  }
});
