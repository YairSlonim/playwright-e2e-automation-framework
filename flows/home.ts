import {expect, Page } from "@playwright/test";
import { credentialsForLogin } from "../helpers/createCredentialsForSignUp";
import { LoginOrRegisterPage } from "../pages/registerAndLogin.page";
import { HomePage } from "../pages/home.page";
import { ProductPage } from "../pages/product.page";
import { CartPage } from "../pages/cart.page";
import { CheckoutPage } from "../pages/checkout.page";

export const loginFlow = async (page: Page) =>{
    const {email, password} = credentialsForLogin();
            const login = new LoginOrRegisterPage(page);
            await login.goto();
            await expect(login.logoLink()).toBeVisible();
            await login.loginForm.login(email,password);   
            const home = new HomePage(page);
            await expect(home.navBar.getMarker()).toBeVisible();      
}

export const  navigateToCategoryFlow = async(page: Page) =>{
        const home = new HomePage(page);
        await home.categorySideBar.clickOnCategory("Women", "DRESS");

}

export const addProductToCartFlow = async(page: Page) =>{
            await navigateToCategoryFlow(page);
            const home = new HomePage(page);
            await home.productsGrid.clickViewProductByName("Rs. 1500");
            const productPage = new ProductPage(page);
            await expect(productPage.getMarker()).toBeVisible();
            await productPage.clickOnAddToCart();
            await expect(productPage.addToCartModal.returnAddToCartSuccessTitle()).toBeVisible();
            await productPage.addToCartModal.clickOnViewCart();
            const cartPage = new CartPage(page);
            await expect(cartPage.getMarker()).toBeVisible();
}

export const clickOnProcceedToCheckout = async(page: Page) =>{
        const cartPage = new CartPage(page);
        await cartPage.clickOnProceedToCheckoutButton();
        const checkoutPage = new CheckoutPage(page);
        await expect(checkoutPage.getMarker()).toBeVisible();
}