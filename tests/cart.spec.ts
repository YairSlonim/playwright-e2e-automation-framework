import { expect, test } from "@playwright/test";
import { loginFlow, addProductToCartFlow, clickOnProcceedToCheckout } from "../flows/home";
import { ProductPage } from "../pages/product.page";
import { CartPage } from "../pages/cart.page";
import { CheckoutPage } from "../pages/checkout.page";
import { credentialsForLogin } from "../helpers/createCredentialsForSignUp";
import { LoginOrRegisterPage } from "../pages/registerAndLogin.page";
import { HomePage } from "../pages/home.page";

test("add product to cart", async ({ page }) => {
    await loginFlow(page);
    await addProductToCartFlow(page);
    const cartPage = new CartPage(page);
    await expect(cartPage.getProductRow("Rs. 1500")).toBeVisible();

});

test("check proceed to checkout button", async ({ page }) => {
    await loginFlow(page);
    await addProductToCartFlow(page);
    await clickOnProcceedToCheckout(page);
});
