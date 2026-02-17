import { Page, Locator } from "@playwright/test";

export class AddToCartModal {
  private readonly page: Page;
  private readonly addedTtitle: Locator;
  private readonly viewCartButton: Locator;
  private readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addedTtitle = this.page.getByRole("heading", { name: "Added!" });
    this.viewCartButton = this.page.getByRole("link", { name: /View Cart/i });
    this.continueShoppingButton = this.page.getByRole("button", {
      name: "Continue Shopping",
    });
  }

  public returnAddToCartSuccessTitle() {
    return this.addedTtitle;
  }

  public async clickOnViewCart(): Promise<void> {
    await this.viewCartButton.click();
  }
}
