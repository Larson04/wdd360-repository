<script setup>
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<template>
  <h1 :class="titleClass">Make me red</h1> <!-- add dynamic class binding here -->
  <div v-bind:id="dynamicId"></div>

  // shorthand for v-bind:
  <div :id="dynamicId"></div>
</template>

<style>
.title {
  color: red;
}
</style>