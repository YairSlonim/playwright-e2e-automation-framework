import { expect, test } from '@playwright/test'
import { HomePage } from '../pages/home.page';
import { loginFlow, navigateToCategoryFlow } from '../flows/home';
import { credentialsForLogin } from '../helpers/createCredentialsForSignUp';
import { LoginOrRegisterPage } from '../pages/registerAndLogin.page';

test('click on category and sSubcategory and expcet the headline be respectively', async ({ page }) => {
        await loginFlow(page);
        await navigateToCategoryFlow(page);
        const home = new HomePage(page);
        const Ectualtitle = await home.productsGrid.returnCategoryTitle();
        expect(Ectualtitle?.toLowerCase()).toContain("women");
})




