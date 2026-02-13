import { Page, Locator} from '@playwright/test'

export class PaymentPage {
    
    private readonly page: Page
    private readonly PaymentTitle: Locator;
    private readonly nameOnCard : Locator;
    private readonly cardNumber : Locator;
    private readonly cvc : Locator;
    private readonly expiryMonth : Locator;
    private readonly expiryYear : Locator;
    private readonly payAndConfirmOrderButton : Locator;

    constructor(page:Page) {
         this.page = page;
         this.PaymentTitle = this.page.getByRole('heading', {name : 'Payment'});        
         this.nameOnCard = this.page.locator('[data-qa="name-on-card"]');  
            this.cardNumber = this.page.locator('[data-qa="card-number"]');
            this.cvc = this.page.locator('[data-qa="cvc"]');
            this.expiryMonth = this.page.locator('[data-qa="expiry-month"]');
            this.expiryYear = this.page.locator('[data-qa="expiry-year"]');
            this.payAndConfirmOrderButton = this.page.locator('[data-qa="pay-button"]');
    }

    public getMarker() {
        return this.PaymentTitle;
    }

    public async paymentProcess(){
        await this.nameOnCard.fill("asdsad");
    }
}