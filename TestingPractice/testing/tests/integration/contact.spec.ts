import { test, expect } from '@playwright/test'

test.describe('Contact form', () => {
  test('contact form submits successfully', async ({ page }) => {
    await page.goto('./contact.html')

    await page.locator('input[name="name"]').fill('Ada Lovelace')
    await page.locator('input[name="email"]').fill('ada@example.com')
    await page.locator('textarea[name="message"]').fill('I enjoy this class!')

    await page.getByRole('button', { name: 'Send' }).click()

    // TODO: Add assertion for success message visibility.
    await expect(page.getByText('Thanks for your message')).toBeVisible()
  })
})
