import { Page, Locator } from "@playwright/test";
import { NavBar } from "../components/navBar.component";
import { ProductsGrid } from '../components/productsGrid.component'
import { CategorySideBar } from '../components/categorySideBar.component'

export class HomePage {
  
  private readonly page: Page;
  public readonly navBar: NavBar;
  public readonly productsGrid: ProductsGrid;
  public readonly categorySideBar: CategorySideBar;

  constructor(page: Page) {
    this.page = page;
    this.navBar = new NavBar(page);
    this.productsGrid = new ProductsGrid(page);
    this.categorySideBar = new CategorySideBar(page);
  }
}
