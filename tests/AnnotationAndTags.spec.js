import { test } from '@playwright/test';

test.skip('Annotation skip', async ({ page }) => {

});

test('Annotation only', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')

    await page.locator('id=user-name').fill('standard_user')
    await page.locator('xpath=//input[@data-test="password"]').fill('secret_sauce')
    await page.locator('#login-button').click() //to get this locator rignt clcik on object and again right clcik on the element properties and select copy selector



});

test('Annotation Fail', async ({ page }) => {
    test.fail('This test is expected to fail');
});

test.fixme('Annotation Fixme', async ({ page }) => {
    test.fixme('This test is not ready to be fixed');
    await page.goto('https://www.saucedemo.com/')

    await page.locator('id=user-name').fill('standard_user')
    await page.locator('xpath=//input[@data-test="password"]').fill('secret_sauce')
    await page.locator('#login-button').click() //to get this locator rignt clcik on object and again right clcik on the element properties and select copy selector


});

test.slow('Annotation Slow and Tag smoke @e2e', async ({ page }) => {
    test.slow('This test is expected to be slow');
    await page.goto('https://www.saucedemo.com/')
    await page.locator('id=user-name').fill('standard_user')
    await page.locator('xpath=//input[@data-test="password"]').fill('secret_sauce')
    await page.locator('#login-button').click() //to get this locator rignt clcik on object and again right clcik on the element properties and select copy selector
});