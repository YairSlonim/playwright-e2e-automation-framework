import { Page, Locator, expect } from '@playwright/test'

export class NavBar{

    private readonly page: Page;
    private readonly logout: Locator;

    constructor(page: Page) {

        this.page = page;
        this.logout = this.page.getByRole('link', {name: /Logout/i});
    }

    public getMarker(){
        return this.logout;
    }

}