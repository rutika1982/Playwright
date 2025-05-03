import { request } from "http";

import { test, expect } from "@playwright/test";

test.describe("API Tests", () => {
    test("GET request", async ({ request }) => {
        const response = await request.get("https://jsonplaceholder.typicode.com/posts");
        expect(response.status()).toBe(200);
        const data = await response.json();
        expect(data.length).toBeGreaterThan(0);
    });
    
    test("POST request", async ({ request }) => {
        const response = await request.post("https://jsonplaceholder.typicode.com/posts", {
        data: {
            title: "foo",
            body: "bar",
            userId: 1,
        },
        });
        expect(response.status()).toBe(201);
        const data = await response.json();
        expect(data.title).toBe("foo");
    });
    })
    test("PUT request", async ({ request }) => {
        const response = await request.put("https://jsonplaceholder.typicode.com/posts/1", {
            data: {
                id: 1,
                title: "foo",
                body: "bar",
                userId: 1,
            },
        });
        expect(response.status()).toBe(200);
        const data = await response.json();
        expect(data.title).toBe("foo");
    });
    test("DELETE request", async ({ request }) => {
        const response = await request.delete("https://jsonplaceholder.typicode.com/posts/1");
        expect(response.status()).toBe(200);
    });
    test("PATCH request", async ({ request }) => {
        const response = await request.patch("https://jsonplaceholder.typicode.com/posts/1", {
            data: {
                title: "foo",
            },
        });
        expect(response.status()).toBe(200);
        const data = await response.json();
        expect(data.title).toBe("foo");
    }); 