<!-- src/components/Footer.vue -->
<template>
  <v-footer color="footer" class=" text-center d-flex flex-column">
    <div>
      <a
          v-for="(icon, index) in icons"
          :key="icon.name"
          :href="icon.link"
          target="_blank"
          rel="noopener noreferrer"
      >
      <v-btn
          :icon="true"
          class="mx-4"
          variant="text"
      >
        <v-icon>{{ icon.name }}</v-icon>
      </v-btn>
      </a>
    </div>

    <div class="pt-0">
      Lorch prooitotocals
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Lorch</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      icons: [
        { name: 'mdi-facebook', link: 'https://facebook.com/YourPage' },
        { name: 'mdi-twitter', link: 'https://twitter.com/YourProfile' },
        { name: 'mdi-instagram', link: 'https://instagram.com/YourProfile' },
      ],
    };
  },
};
</script>
