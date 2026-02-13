import { expect, Locator, Page } from "@playwright/test"; 

export class PaymentDonePage {
    
    private readonly page: Page
    private readonly PaymentTitle: Locator

    constructor(page:Page) {
         this.page = page;
         this.PaymentTitle = this.page.locator('[data-qa="order-placed"]');        
    }   

    public getMarker() {
        return this.PaymentTitle;
    }
}