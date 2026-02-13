import {Page, Locator} from '@playwright/test';

export class SignupForm {

    private readonly page: Page;
    private readonly root: Locator;
    private readonly name: Locator;
    private readonly emailAddress: Locator;
    private readonly signupButton: Locator;
    /**
     *
     */
    constructor(page: Page) {
        this.page = page;

        this.root = this.page.locator('.signup-form')
        this.name = this.root.getByPlaceholder('Name');
        this.emailAddress = this.root.getByPlaceholder('Email Address')
        this.signupButton = this.root.locator('[data-qa="signup-button"]')
    }

    public async fillSignupForm(name: string, emailAddress:string) {
        await this.name.fill(name);
        await this.emailAddress.fill(emailAddress);

        await this.signupButton.click()
    }
}