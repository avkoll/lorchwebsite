<!-- src/components/Header.vue -->
<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Ready to See the Lorch</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/">THE MAIN LORCH CONTENT</v-btn>
    <v-btn text to="/about">Lorch</v-btn>
    <v-btn text to="/contact">!!LORCH STORE$$$</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
};
</script>
