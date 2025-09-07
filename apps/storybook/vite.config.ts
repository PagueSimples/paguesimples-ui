import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@paguesimples/ui': resolve(__dirname, '../../packages/ui/src'),
      '@paguesimples/tokens': resolve(__dirname, '../../packages/tokens/src'),
    },
  },
});