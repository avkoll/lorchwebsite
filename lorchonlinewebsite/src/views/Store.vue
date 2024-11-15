<template>
  <div class="store-page">
    <h1>Our Store</h1>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <Product3D :modelPath="product.modelPath" :scale="product.scale" />
        <h2>{{ product.name }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">${{ product.price.toFixed(2) }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Product3D from '../components/common/Product3D.vue';

const products = ref([
  {
    id: 1,
    name: "Product 1",
    description: "This is a description of product 1.",
    price: 19.99,
    modelPath: '/lorchwebsite/models/clock/mantel_clock_01_4k.gltf',
    scale: 10,
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is a description of product 2.",
    price: 29.99,
    modelPath: '/lorchwebsite/models/lightbulb/lightbulb_led_4k.gltf',
    scale: 10,
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is a description of product 3.",
    price: 39.99,
    modelPath: '/lorchwebsite/models/BoomBox.glb',
    scale: 50,
  },
]);

function addToCart(product) {
  alert(`${product.name} has been added to your cart!`);
}
</script>

<style scoped>
.store-page {
  text-align: center;
  padding: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.product-description {
  font-size: 0.9rem;
  color: #555;
}

.product-price {
  font-weight: bold;
  margin: 10px 0;
}

button {
  background-color: #42b983;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369d73;
}
</style>
