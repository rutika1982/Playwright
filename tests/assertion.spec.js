import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/');
    await expect.soft(page.locator('text=Kitchen')).toHaveCount(1)

    if (await page.locator('text=Kitchen').isVisible()) {
        console.log('Kitchen is visible');
    }
    else {
        console.log('Kitchen is not visible');
    }
    await expect(page.locator('text=Kitchen')).toHaveClass(/.*css-dpmy2a/);
    await expect(page.locator('text=Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/);
    await expect(page).toHaveScreenshot('screenshot.png', { fullPage: true });
    

});