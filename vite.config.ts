import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  plugins: [
    react(),
    Pages({
      dirs: "src/pages", // diretório onde suas telas ficarão
      extensions: ['jsx', 'tsx'],
    }),
  ],
});
