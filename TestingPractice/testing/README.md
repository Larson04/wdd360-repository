# WDD 360 Testing Activity Bundle

This folder is a self-contained package of the testing activity starter code and solution tests.

## Contents

- `src/utils/` utility functions for unit testing exercises
- `src/pages/contact.html` page used for integration testing
- `tests/unit/` starter unit test files (with `it.todo`)
- `tests/integration/` starter Playwright test template
- `tests/solutions/` completed instructor solution tests
- Vitest and Playwright config files

## Quick Start

1. Open a terminal in this folder:
   - `cd testing`
2. Install dependencies:
   - `pnpm install`
3. Install Playwright browser binary:
   - `pnpm exec playwright install chromium`

## Run Tests

- Student unit tests: `pnpm test:unit`
- Student integration test: `pnpm test:integration`
- Solution unit tests: `pnpm test:unit:solutions`
- Solution integration test: `pnpm test:integration:solutions`
