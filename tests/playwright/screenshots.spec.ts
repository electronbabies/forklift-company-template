import { test } from '@playwright/test'

const routes = [
  { name: 'home', path: '/' },
  { name: 'equipment', path: '/equipment' },
  { name: 'rentals', path: '/rentals' },
  { name: 'service', path: '/service' },
  { name: 'parts', path: '/parts' },
  { name: 'about', path: '/about' },
]

const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'large', width: 2560, height: 1440 },
]

const themes = [
  { id: 'dark-blue', label: 'Dark Blue' },
  { id: 'dark-yellow', label: 'Dark Yellow' },
  { id: 'mixed-yellow', label: 'Mixed Yellow' },
  { id: 'coastal-light', label: 'Coastal Light' },
]

for (const theme of themes) {
  for (const route of routes) {
    for (const viewport of viewports) {
      test(`${theme.id} - ${route.name} - ${viewport.name}`, async ({ page }) => {
        await page.setViewportSize({
          width: viewport.width,
          height: viewport.height,
        })

        await page.goto(`http://localhost:3000${route.path}`)
        await page.waitForLoadState('networkidle')

        await page.evaluate((themeId) => {
          document.documentElement.dataset.theme = themeId
        }, theme.id)

        await page.waitForTimeout(100)

        await page.screenshot({
          path: `screenshots/${theme.id}/${viewport.name}/${route.name}.png`,
          fullPage: true,
        })
      })
    }
  }
}
