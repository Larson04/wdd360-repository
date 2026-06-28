<script setup>
import { reactive, ref } from 'vue'

// component logic
// declare some reactive state here.
const counter = reactive({
  count: 0
})

console.log(counter.count) // 0
counter.count++

const message = ref('Hello World!')

console.log(message.value) // "Hello World!"
message.value = 'Changed'
</script>

<template>
  <h1>Make me dynamic!</h1>
  <h2>{{ message.split('').reverse().join('') }}</h2>
	<p>Count is: {{ counter.count }}</p>
</template>