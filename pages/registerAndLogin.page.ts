import { Page, Locator, expect } from '@playwright/test'
import { SignupForm } from '../components/signupForm.component'
import { EnterAccountInformation } from '../components/enterAccountInformation.component'
import { LoginForm } from '../components/loginForm.component'

export class LoginOrRegisterPage {

    protected readonly page: Page
    private readonly logo : Locator
    public readonly signupForm: SignupForm
    public readonly enterAccount : EnterAccountInformation
    public readonly loginForm: LoginForm

    constructor(page: Page) {
        this.page = page
        this.logo =  this.page.getByRole('link', { name: /Website for automation/i });
        this.signupForm = new SignupForm(page);
        this.enterAccount = new EnterAccountInformation(page);
        this.loginForm = new LoginForm(page);
    }

    public async goto() {
        await this.page.goto('/login');
    }
    public logoLink(){
        return this.logo;
    }
}