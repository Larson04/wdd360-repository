<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  // update component state
  count.value++
}
</script>

<template>
  <!-- make this button work -->
  <button v-on:click="increment">Count is: {{ count }}</button>
  //shorthand
  <button @click="increment">Count is: {{ count }}</button>

</template>