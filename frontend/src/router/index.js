// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Dashboard from '../views/Dashboard.vue';
import Store from '../views/Store.vue';
import ThreeDView from "../views/ThreeDView.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/dashboard', component: Dashboard },
    { path: '/Store', component: Store},
    { path: '/3d-scene', name: 'ThreeDScene', component: ThreeDView },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
