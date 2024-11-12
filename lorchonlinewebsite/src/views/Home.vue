<!-- src/views/Home.vue -->
<template>
  <div>
    <Hero />

    <ImageOverlay imageSrc="./src/assets/satellite.png">
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
  components: { Hero, ImageOverlay, Header, Sidebar, Footer },
};
</script>
