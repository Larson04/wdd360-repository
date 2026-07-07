import { test, expect } from '@playwright/test'

test('contact form submits successfully (solution)', async ({ page }) => {
  await page.goto('/contact')

  await page.locator('input[name="name"]').fill('Ada Lovelace')
  await page.locator('input[name="email"]').fill('ada@example.com')
  await page.locator('textarea[name="message"]').fill('I enjoy this class!')

  await page.getByRole('button', { name: 'Send' }).click()

  await expect(page.getByText('Thanks for your message')).toBeVisible()
})
