import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  root: '.',  // Since `vite.config.js` is in the `frontend` folder, the root should be '.'
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // Enables Vuetify components and directives
  ],
  build: {
    outDir: '../dist',  // Places the output in a `dist` folder at the same level as `frontend`
    emptyOutDir: true,
  },
  base: '/',  // Correct base URL for Vercel deployment
});
