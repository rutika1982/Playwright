

import { test, expect } from "@playwright/test";

test('API GET', async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users?page=2")
        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('page', 2);
        expect(responseBody).toHaveProperty('per_page', 6);
        expect(responseBody).toHaveProperty('data[0].first_name', 'Michael');
        const text = await response.text();
        expect(text).toContain('Michael');
        console.log(text);
        console.log(responseBody);
    });

test('API POST', async ({ request }) => {

    const response = await request.post("https://reqres.in/api/users", {
        data: {
            name: "morpheus",
            job: "leader"
        },
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1"
        }
    });

    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('name', 'morpheus');
    expect(responseBody).toHaveProperty('job', 'leader');
    console.log(responseBody);
}
);

test('API PUT', async ({ request }) => {
    const response = await request.put("https://reqres.in/api/users/2", {
        data: {
            name: "morpheus",
            job: "zion resident"
        },
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1"
        }
    });

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('name', 'morpheus');
    expect(responseBody).toHaveProperty('job', 'zion resident');
    console.log(responseBody);
}
);  

test('API DELETE', async ({ request }) => { 
    const response = await request.delete("https://reqres.in/api/users/2", {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1"
        }
    });

    expect(response.status()).toBe(204);
    expect(response.ok()).toBeTruthy();
    
}
);