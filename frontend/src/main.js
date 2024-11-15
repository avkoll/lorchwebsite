// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify'; // Ensure Vuetify is correctly imported

createApp(App)
    .use(router)     // Use the router
    .use(vuetify)    // Use Vuetify
    .mount('#app');
