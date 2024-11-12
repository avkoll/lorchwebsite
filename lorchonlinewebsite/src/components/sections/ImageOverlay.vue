<!-- src/components/ImageOverlay.vue -->
<template>
  <v-container fluid class="image-overlay-container">
    <v-img :src="imageSrc" class="image-overlay">
      <!-- The overlay div to hold any custom content -->
      <div class="text-overlay">
        <slot></slot> <!-- Allows dynamic content and styling from the parent -->
      </div>
    </v-img>
  </v-container>
</template>

<script>
export default {
  name: 'ImageOverlay',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.image-overlay {
  height: 60vh; /* Adjust height as per your design */
  position: relative;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
