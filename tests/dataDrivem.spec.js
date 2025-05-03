import { test, expect } from '@playwright/test';
import fs from 'fs';
import { data } from './testData/data.json';

const testDataPath = 'tests/testData/loginData.json';
const testdata = JSON.parse(fs.readFileSync(testDataPath, 'utf8'));
for (const data of testdata) {
    test(`Data Driven Test - Login with username: ${data.username} and password: ${data.password}`, async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill(data.username);
        await page.locator('[data-test="password"]').fill(data.password);
        await page.locator('[data-test="login-button"]').click();
        //     if (data.expectedResult === 'success') {
        //         await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        //         await expect(page.locator('.title')).toHaveText('Products');
        //     } else {
        //         await expect(page.locator('[data-test="error"]')).toBeVisible();
        //     }
    });
}

for (const [key, value] of Object.entries(data)) {

    test.only(`Data Driven Test - Google search - ${value}`, async ({ page }) => {

        await page.goto('https://www.google.com/');
        await page.locator('#APjFqb').fill(value);
        await page.locator('#APjFqb').press('Enter');

    })
}


