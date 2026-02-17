import { Page, test as base, expect } from '@playwright/test';
import { loginFlow } from '../flows/home';  

type MyFixtures = {
    loggedInPage: Page; 
};  

export const test = base.extend<MyFixtures>({
    loggedInPage: async ({ page }, use) => {
        await loginFlow(page);
        await use(page);
    },
}); 

export { expect };  