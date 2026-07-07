import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/solutions/unit/**/*.solution.test.js'],
    environment: 'node'
  }
})
