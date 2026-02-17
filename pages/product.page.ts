import { Page, Locator, expect } from "@playwright/test";
import { AddToCartModal } from '../components/modals/addToCartModal.component'

export class ProductPage{
    //add to cart locator
    private readonly page: Page
    private readonly addToCart: Locator
    public addToCartModal: AddToCartModal

    constructor(page: Page) {
        this.page = page;
        this.addToCart = this.page.getByRole('button', { name: /Add to cart/i })
        this.addToCartModal = new AddToCartModal(page);

    }

    public getMarker(){
        return this.addToCart;
    }

    public async clickOnAddToCart():Promise<void>{
        await this.addToCart.click();
    }

}