<!-- src/App.vue -->
<template>
  <v-app>
    <!-- Header Component -->
    <Header />

    <!-- Dynamic Content Loaded Based on Routes -->
    <router-view />

    <!-- Footer Component -->
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
