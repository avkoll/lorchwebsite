// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
// import './style.css'

const vuetify = createVuetify();

createApp(App)
    .use(router)     // Use the router
    .use(vuetify)    // Use Vuetify
    .mount('#app');
