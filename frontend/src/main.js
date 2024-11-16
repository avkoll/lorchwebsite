// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Vuetify styles and icons
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

// Import Vercel Analytics
import { inject } from '@vercel/analytics';

// Custom Theme Definition
const customLightTheme = {
    dark: false,
    colors: {
        primary: '#173b5a',
        secondary: '#FFB300',
        accent: '#FF4081',
        error: '#E53935',
        background: '#F5F5F5',
        footer: '#455A64',
        info: '#29B6F6',
        success: '#66BB6A',
        warning: '#FFA726',
        text: '#2E2E2E',  // Text color for light theme
    },
};

const customDarkTheme = {
    dark: true,
    colors: {
        primary: '#BB86FC',
        secondary: '#a5cfce',
        accent: '#FF4081',
        error: '#E53935',
        background: '#121212',
        footer: '#1E1E1E',
        info: '#82B1FF',
        success: '#4CAF50',
        warning: '#FB8C00',
        text: '#E0E0E0',  // Text color for dark theme
    },
};


// Create Vuetify instance
const vuetify = createVuetify({
    theme: {
        defaultTheme: 'customDarkTheme',
        themes: {
            customLightTheme,
            customDarkTheme,
        },
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
    .mount('#app');

// Inject Vercel Analytics
inject();
