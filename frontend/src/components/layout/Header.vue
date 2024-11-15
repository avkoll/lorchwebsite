<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Ready to See the Lorch</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template #activator="{ props }">
        <v-btn v-bind="props" icon>
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item :to="{ path: '/' }" link>
          <v-list-item-title>THE MAIN LORCH CONTENT</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/about' }" link>
          <v-list-item-title>Lorch</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/store' }" link>
          <v-list-item-title>!!LORCH STORE$$$</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/3d-scene' }" link>
          <v-list-item-title>LORCH REALITY</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
</style>
