import { test, expect } from '@playwright/test';

let context;
let page;
test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext()
    await (await context).tracing.start({
        screenshots: true,
        snapshots: true,
        //sources: true,
    });
    page = await context.newPage();
    
})



test.afterAll(async ({ browser }) => {
    await (await context).tracing.stop({ path: 'trace6.zip' });
    //await context.close();
})
//     /* Test against branded browsers. */

test('test', async ({  }) => {

    // await context.tracing.start({
    //     screenshots: true,
    //     snapshots: true,
    //     sources: true,
    // });
    //await context.tracing.start({ path: 'trace.zip' });

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page).toHaveTitle('Swag Labs');


    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    //await context.tracing.stop({ path: 'trace1.zip' });    
});