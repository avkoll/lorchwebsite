<!-- src/views/Contact.vue -->
<template>
  <v-container>
    <h1>Contact Us</h1>
    <p>If you have any questions, feel free to reach out to us.</p>
    <v-form>
      <v-text-field label="Your Name"></v-text-field>
      <v-text-field label="Your Email"></v-text-field>
      <v-textarea label="Your Message"></v-textarea>
      <v-btn color="primary">Send</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
</style>
