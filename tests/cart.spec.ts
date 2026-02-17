import { expect, test } from "../fixtures/auth.fixture"
import { loginFlow, addProductToCartFlow, clickOnProcceedToCheckout } from "../flows/home";
import { ProductPage } from "../pages/product.page";
import { CartPage } from "../pages/cart.page";
import { CheckoutPage } from "../pages/checkout.page";
import { credentialsForLogin } from "../helpers/createCredentialsForSignUp";
import { LoginOrRegisterPage } from "../pages/registerAndLogin.page";
import { HomePage } from "../pages/home.page";

test("add product to cart", async ({ loggedInPage }) => {

    await test.step("Add Product To Cart", async() =>{
        await addProductToCartFlow(loggedInPage);
    })
     const cartPage = new CartPage(loggedInPage);
    await test.step("check if product if visible", async() =>{
      
        await expect(cartPage.getProductRow("Rs. 1500")).toBeVisible();
    })
    await expect(loggedInPage.locator('text=THIS DOES NOT EXIST')).toBeVisible();
});

test("check proceed to checkout button", async ({ page }) => {
    await loginFlow(page);
    await addProductToCartFlow(page);
    await clickOnProcceedToCheckout(page);
});
