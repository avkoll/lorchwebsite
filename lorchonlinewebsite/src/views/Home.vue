<template>
  <div>
    <Header />
    <Sidebar />
    <v-container>
      <h1>Home Page</h1>
      <p>Welcome to the home page.</p>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: { Header, Sidebar, Footer },
};
</script>
