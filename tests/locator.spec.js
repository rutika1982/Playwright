import { test, expect } from '@playwright/test';

test('Locator Tests', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('standard_user')
    await page.locator('xpath=//input[@data-test="password"]').fill('secret_sauce')
    await page.locator('#login-button').click() //to get this locator rignt clcik on object and again right clcik on the element properties and select copy selector
    
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page.locator('text=Product')).toHaveText('Products')
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await page.pause()
    //await expect(page).locator(':has-text=("$29.99")').toBeVisible()


});
