import { Page, Locator} from '@playwright/test'

export class LoginForm{

    private readonly page: Page;
    private readonly email: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator;

    constructor(page:Page) {
        this.page = page;

        this.email = this.page.locator('[data-qa="login-email"]');
        this.password = this.page.locator('[data-qa="login-password"]');   
        this.loginButton = this.page.getByRole('button', {name: /Login/i})
    }

    public async login(email: string, password: string)
    {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}