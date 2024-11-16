// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import FitScreen from "@fit-screen/vue";

// Vuetify styles and icons
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

// Import Vercel Analytics
import { inject } from '@vercel/analytics';



// Create Vuetify instance
const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark',
    },
    display: {
        thresholds: {
            xs: 340,
            sm: 540,
            md: 800,
            lg: 1280,
        },
        scrollBarWidth: 16,
    },
});

// Create Vue app
const app = createApp(App)
    .use(router)     // Use the router
    .use(vuetify)    // Use Vuetify
    .use(FitScreen)
    .mount('#app');

// Inject Vercel Analytics
inject();
