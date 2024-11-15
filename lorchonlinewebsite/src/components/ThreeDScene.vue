<!-- src/components/ThreeDScene.vue -->
<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const mountRef = ref(null);
let scene, camera, renderer, model, animationFrameId;

onMounted(() => {
  initScene();
  loadModel();
  window.addEventListener('resize', onWindowResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize);
  cancelAnimationFrame(animationFrameId);
  renderer.dispose();
});

function initScene() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  mountRef.value.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  scene.background = new THREE.Color(0xeeeeee); // Light gray background for contrast

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  // Camera position
  camera.position.set(0, 1, 1); // Adjust as needed

  // Add OrbitControls to allow camera movement
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  animate();
}


function loadModel() {
  const loader = new GLTFLoader();

  loader.load(
      '/lorchwebsite/models/clock/mantel_clock_01_4k.gltf', // Add the base path here
      (gltf) => {
        model = gltf.scene;

        model.scale.set(5, 5, 5); // set scale of model

        scene.add(model);
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the model:', error);
      }
  );
}


function animate() {
  animationFrameId = requestAnimationFrame(animate);

  // Rotate the model if loaded
  if (model) {
    model.rotation.y += 0.01;
  }

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
</script>

<template>
  <div ref="mountRef" style="width: 100%; height: 100vh;"></div>
</template>
