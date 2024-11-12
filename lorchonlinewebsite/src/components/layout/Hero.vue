<!-- src/components/Hero.vue -->
<template>
  <v-container class="hero" fluid>
    <v-img src="@/assets/hero-image.jpg" class="hero-image">
      <div class="overlay">
        <h1>"We Capture Light, You Capture What’s Left." <br>
          -Lorch</h1>
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
}
.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  color: white;
  font-family: 'Georgia', sans-serif;
  font-size: 2rem;
  font-style: italic;
}
</style>
