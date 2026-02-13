import { Page, Locator } from "@playwright/test";

export class ProductsGrid {
  private readonly page: Page;
  private readonly categoryTitle: Locator;
  private readonly productCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.categoryTitle = this.page.locator("h2.title.text-center");
    this.productCards = this.page.locator(".product-image-wrapper");
  }

  public returnCategoryTitle() {
    return this.categoryTitle.textContent();
  }

  public async clickViewProductByName(productName: string): Promise<void> {
    const card = this.productCards
      .filter({ has: this.page.getByText(productName, { exact: true }) })
      .first();

    await card.getByRole("link", { name: /view product/i }).click();
  }
}
