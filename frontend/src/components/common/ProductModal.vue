<!-- src/components/ProductModal.vue -->
<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="close-button" @click="close">X</button>
      <h2>{{ product.name }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price">Price: ${{ product.price.toFixed(2) }}</p>
      <Product3D :modelPath="product.modelPath" :scale="product.scale" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import Product3D from './Product3D.vue';

const props = defineProps({
  isOpen: Boolean,
  product: Object,
});

const emits = defineEmits(['close']);

function close() {
  emits('close');
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
