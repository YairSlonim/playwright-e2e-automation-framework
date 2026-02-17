import { expect, test } from '@playwright/test'
import { addProductToCartFlow, loginFlow, clickOnProcceedToCheckout } from '../flows/home';
import { ProductPage } from '../pages/product.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { PaymentPage } from '../pages/payment.page';
import { PaymentDonePage } from '../pages/paymentDone.page';

test("check payment process", async ({page}) =>{
            await loginFlow(page);
            await addProductToCartFlow(page);
            await clickOnProcceedToCheckout(page);
            const checkoutPage = new CheckoutPage(page);
            await checkoutPage.clickOnPlaceOrderButton();

            const paymentPage = new PaymentPage(page);
            await expect(paymentPage.getMarker()).toBeVisible();
            await paymentPage.paymentProcess();
            const paymentDonePage = new PaymentDonePage(page);
            await expect(paymentDonePage.getMarker()).toBeVisible();
})


