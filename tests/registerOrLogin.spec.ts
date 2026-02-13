import {test, expect} from '@playwright/test';
import { LoginOrRegisterPage } from '../pages/registerAndLogin.page';
import { createRandomCredential, credentialsForLogin } from '../helpers/createCredentialsForSignUp'
import { HomePage } from '../pages/home.page';
import { loginFlow } from '../flows/home';

test("register successfully", async ({page}) =>{

    const credentials = createRandomCredential();
    const register = new LoginOrRegisterPage(page);

    await register.goto();
    await expect(register.logoLink()).toBeVisible();
    await register.signupForm.fillSignupForm(credentials.name,credentials.email);
    await register.enterAccount.fillAccountInformation();
    await register.enterAccount.isAcountCreatedVisible();
})

test("login successfully", async ({page}) =>{
    await loginFlow(page);
})