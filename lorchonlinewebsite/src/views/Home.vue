<template>
  <div>

    <Hero />

    <v-container>
      <h1>Home Page</h1>
      <p>Welcome to the home page.</p>
    </v-container>

    <ImageOverlay imageSrc="@/assets/satellite.png">
      <h2 style="color: white; font-size: 2.5rem; font-family: 'Arial', sans-serif;">
        Feature One: Capturing Light Like Never Before
      </h2>
    </ImageOverlay>


  </div>
</template>

<script>
import Header from '../components/layout/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import Footer from '../components/layout/Footer.vue';
import ImageOverlay from "../components/sections/ImageOverlay.vue";
import Hero from "../components/layout/Hero.vue";

export default {
  components: {Hero, ImageOverlay, Header, Sidebar, Footer },
};
</script>
