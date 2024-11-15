<!-- src/components/Product3D.vue -->
<template>
  <div ref="mountRef" class="product-3d-container"></div>
</template>

<script setup>
import { onMounted, ref, onUnmounted, watch, toRef } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const props = defineProps({
  modelPath: {
    type: String,
    required: true,
  },
  scale: {
    type: Number,
    default: 1,
  }
});

const mountRef = ref(null);
let scene, camera, renderer, model;

onMounted(() => {
  initScene();
  loadModel(props.modelPath, props.scale);
  window.addEventListener('resize', onWindowResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize);
  renderer.dispose();
});

function initScene() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0.5, 3);
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(200, 200); // Set specific size for the tile
  mountRef.value.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);
  animate();
}

function loadModel(modelPath, scale) {
  const loader = new GLTFLoader();
  loader.load(
      modelPath,
      (gltf) => {
        model = gltf.scene;
        model.scale.set(scale, scale, scale); // Apply the dynamic scale
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("Error loading 3D model:", error);
      }
  );
}

function animate() {
  requestAnimationFrame(animate);
  if (model) model.rotation.y += 0.01;
  renderer.render(scene, camera);
}

function onWindowResize() {
  renderer.setSize(200, 200);
  camera.aspect = 1;
  camera.updateProjectionMatrix();
}
</script>

<style scoped>
.product-3d-container {
  width: 100%;
  height: 200px;
}
</style>
