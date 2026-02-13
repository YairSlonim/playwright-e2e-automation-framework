import { Page, Locator } from "@playwright/test";

export class CheckoutPage {
  private readonly page: Page;
  private readonly addressDetailsHeadline: Locator;
  private readonly placeOrderButton: Locator;

  /**
   *
   */
  constructor(page: Page) {
    this.page = page;
    this.addressDetailsHeadline = this.page.getByRole("heading", {name: "Address Details"});
    this.placeOrderButton = this.page.getByRole('link', {name: "Place Order"});
  }

  public getMarker(){
    return this.addressDetailsHeadline;
  }

  public async clickOnPlaceOrderButton(){
    await this.placeOrderButton.click();
  }
}
