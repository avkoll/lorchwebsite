<!-- src/components/Hero.vue -->
<template>
  <v-container class="hero" fluid>
    <v-img src="/" class="hero-image">
      <div class="overlay">
        <h1 class="text-secondary">
          "We Capture Light, You Capture What’s Left." <br>
          -Lorch
        </h1>
        <v-btn color="primary" large @click="scrollToContent">Learn More</v-btn>
      </div>
    </v-img>
  </v-container>
</template>

<script>
export default {
  methods: {
    scrollToContent() {
      window.scrollTo({ top: 800, behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.hero-image {
  height: 80vh;
  position: relative;
  z-index: 10;
}
.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  font-family: 'Georgia', sans-serif;
  font-size: 2rem;
  font-style: italic;
  z-index: 10;
}
</style>
