import {expect, test} from "@playwright/test"

test("home page", async ({page}) => {
    await page.goto("localhost:3000")
    await expect(page).toHaveTitle("💿 remix starter | home")

    await expect(page.getByRole("heading", {name: "Home"})).toBeVisible()
    await expect(page.getByRole("link", {name: "Home"})).toBeVisible()
    await expect(page.getByRole("link", {name: "About"})).toBeVisible()
})

test("about page", async ({page}) => {
    await page.goto("localhost:3000/about")
    await expect(page).toHaveTitle("💿 remix starter | about")

    await expect(page.getByRole("heading", {name: "About"})).toBeVisible()
    await expect(page.getByRole("link", {name: "Home"})).toBeVisible()
    await expect(page.getByRole("link", {name: "About"})).toBeVisible()
})

test("navigates", async ({page}) => {
    await page.goto("localhost:3000")

    await expect(page).toHaveTitle("💿 remix starter | home")
    await expect(page.getByRole("heading", {name: "Home"})).toBeVisible()

    await page.getByRole("link", {name: "About"}).click()

    await expect(page).toHaveTitle("💿 remix starter | about")
    await expect(page.getByRole("heading", {name: "About"})).toBeVisible()
})
