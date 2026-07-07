import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/solutions/integration',
  use: {
    baseURL: 'http://localhost:4322'
  },
  webServer: {
    command: 'pnpm dev --host 0.0.0.0 --port 4322',
    url: 'http://localhost:4322',
    reuseExistingServer: true,
    timeout: 120000
  }
})
