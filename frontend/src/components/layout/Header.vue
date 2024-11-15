<template>
  <v-app-bar app color="primary" dark>
    <v-btn variant="plain" :to="{ path: '/' }" class="v-toolbar-title-btn">
      Ready to See the Lorch
    </v-btn>

    <v-spacer></v-spacer>

    <!-- Menu Button -->
    <v-menu offset-y>
      <template #activator="{ props }">
        <v-btn v-bind="props" icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>

      <!-- Mega Menu Content -->
      <v-sheet width="800" class="pa-4">
        <v-container>
          <v-row>
            <!-- Column 1 -->
            <v-col cols="4">
              <h3 class="text-h6">Products</h3>
              <v-list dense>
                <v-list-item link :to="{ path: '/store' }">
                  <v-list-item-title>New Arrivals</v-list-item-title>
                </v-list-item>
                <v-list-item link :to="{ path: '/store' }">
                  <v-list-item-title>Best Sellers</v-list-item-title>
                </v-list-item>
                <v-list-item link :to="{ path: '/store' }">
                  <v-list-item-title>Special Deals</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>

            <!-- Column 2 -->
            <v-col cols="4">
              <h3 class="text-h6">Categories</h3>
              <v-list dense>
                <v-list-item link :to="{ path: '/3d-scene' }">
                  <v-list-item-title>ThreeD</v-list-item-title>
                </v-list-item>
                <v-list-item link :to="{ path: '/dashboard' }">
                  <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>
                <v-list-item link :to="{ path: '/about' }">
                  <v-list-item-title>About</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>

            <!-- Column 3 -->
            <v-col cols="4">
              <h3 class="text-h6">Services</h3>
              <v-list dense>
                <v-list-item link :to="{ path: '/services/installation' }">
                  <v-list-item-title>Installation</v-list-item-title>
                </v-list-item>
                <v-list-item link :to="{ path: '/services/warranty' }">
                  <v-list-item-title>Warranty</v-list-item-title>
                </v-list-item>
                <v-list-item link :to="{ path: '/services/support' }">
                  <v-list-item-title>Customer Support</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.v-toolbar-title-btn {
  font-size: 1.25rem;
  text-transform: none;
  color: inherit;
  opacity: 1;
}
</style>
