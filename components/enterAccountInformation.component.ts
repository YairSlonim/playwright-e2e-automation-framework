import {Page , Locator, expect} from '@playwright/test'

type TitleOption = 'Mr' | 'Mrs';

export class EnterAccountInformation{

    private readonly page: Page;
    private readonly titleOptions: Record<string,Locator>;
    private readonly password: Locator;
    private readonly birthDay: Locator;
    private readonly birthMonth: Locator;
    private readonly birthYear: Locator;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly company: Locator;
    private readonly address: Locator;
    //private readonly address2: Locator;
    private readonly country: Locator;
    private readonly state: Locator;
    private readonly city: Locator;
    private readonly zipCode: Locator;
    private readonly mobileNumber: Locator;
    private readonly createAccountButton: Locator;
    private readonly accountCreatedTitle: Locator;

    /**
     *
     */
    constructor(page: Page) {
        this.page = page;

        this.titleOptions = {
            'Mr':this.page.getByRole('radio', {name: /mr\./i}),
            'Mrs':this.page.getByRole('radio', {name: /mrs\./i})
        }

        this.password = this.page.getByLabel(/password/i);

        this.birthDay = this.page.locator('[data-qa="days"]');
        this.birthMonth = this.page.locator('[data-qa="months"]');
        this.birthYear = this.page.locator('[data-qa="years"]');

        this.firstName = this.page.getByLabel(/first name/i);
        this.lastName = this.page.getByLabel(/last name/i);
        this.company = this.page.locator('[data-qa="company"]');
        this.address = this.page.locator('[data-qa="address"]');//country
        this.country = this.page.locator('[data-qa="country"]');//
        this.state = this.page.getByLabel(/state/i);//
        this.city = this.page.locator('[data-qa="city"]');//data-qa="city"
        this.zipCode = this.page.locator('[data-qa="zipcode"]');//zipCode
        this.mobileNumber = this.page.getByLabel(/mobile number/i);//
        
        this.createAccountButton = this.page.getByRole('button', {name:/Create Account/i})   
        this.accountCreatedTitle = this.page.getByRole('heading', {name : /Account Created!/i})
    }

    public async fillAccountInformation(){
       await this.titleOptions['Mr'].check();
       await this.password.fill("dandan");
       await this.birthDay.selectOption('10');
       await this.birthMonth.selectOption('5');
       await this.birthYear.selectOption('1995');
       await this.firstName.fill("moshiko");
       await this.lastName.fill("danidoni");
       await this.company.fill("sadsadsadads")
       await this.address.fill("address");
       await this.country.selectOption("Israel");
       await this.state.fill("israel");
       await this.city.fill("kfar saba");
       await this.zipCode.fill("1231234");
       await this.mobileNumber.fill("123789456");

       await this.createAccountButton.click();
    }

    public async isAcountCreatedVisible()
    {
        return await expect(this.accountCreatedTitle).toBeVisible();
    }


}