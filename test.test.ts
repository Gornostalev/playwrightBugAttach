import test, { expect } from "@playwright/test";

test("Test", async ({}, testInfo) => {
  testInfo.attachments.push({ name: "A string", contentType: "string" });
  expect(true).toBe(true);
});

test.afterEach(async ({ }, testInfo) => {
  testInfo.attachments.push({
    name: 'my attach',
    path: `/testPath`,
    contentType: 'text/html',
  })
})
