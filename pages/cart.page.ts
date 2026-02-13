import { Page, Locator} from '@playwright/test'

export class CartPage {

    private readonly page: Page
    private readonly proceedToCheckoutButton: Locator
    private readonly productsTable: Locator
    private readonly rowsFromTable: Locator

    constructor(page: Page) {
        this.page = page;
        this.proceedToCheckoutButton = this.page.locator('a.check_out');
        this.productsTable = this.page.locator('#cart_info_table')
        this.rowsFromTable = this.productsTable.locator('tbody tr')
    }
    
    public getMarker(): Locator{
        return this.proceedToCheckoutButton;
    }

    private rowByProductName(productName: string):Locator {  
        return this.rowsFromTable.filter({hasText: productName}).first();   
    }

    public getProductRow(productName: string):Locator {
        return this.rowByProductName(productName);
    }

    public async clickOnProceedToCheckoutButton(){
        await this.proceedToCheckoutButton.click();
    }

}