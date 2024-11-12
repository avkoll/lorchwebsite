import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  root: './lorchonlinewebsite',  // Set the root to the frontend directory (corrected syntax)
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // enables Vuetify components and directives
  ],
  build: {
    outDir: '../dist',  // Updated to place the output in the 'dist' folder at the root level
    emptyOutDir: true,
  },
  base: '/lorchwebsite/',  // Correct base URL for deployment
});
