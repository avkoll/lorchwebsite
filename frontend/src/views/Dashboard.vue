<template>
  <div>
    <Header />
    <Sidebar />
    <v-container>
      <h1>Dashboard</h1>
      <DashboardCard />
      <DashboardCard />
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/layout/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import Footer from '../components/layout/Footer.vue';
import DashboardCard from '../components/DashboardCard.vue';

export default {
  components: { Header, Sidebar, Footer, DashboardCard },
};
</script>
