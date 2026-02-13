import { Page, Locator} from "@playwright/test";

export class CategorySideBar {
  private readonly page: Page;
  private readonly root: Locator;

  constructor(page: Page) {
    this.page = page;
    this.root = this.page.locator('#accordian');
  }

  private categoryLocator(category: string): Locator{
    return this.root.locator(`[href="#${category}" i]`)
  }

  private secondCategoryLocator(category:string, secondCategory:string): Locator{
      const mainCategory = this.root.locator(`#${category}`);  
      return mainCategory.getByRole('link', {name: secondCategory.trim()});
  }

  public async clickOnCategory(category: string, secondCategory: string) {
    const categoryToOpen = this.categoryLocator(category);
    await categoryToOpen.click();  
    const secondCategoryToOpen = this.secondCategoryLocator(category, secondCategory);
    await secondCategoryToOpen.click()
  }
}