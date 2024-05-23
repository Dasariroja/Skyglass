import { Page } from "@playwright/test";
import { CookiesLoctors } from "../components/cookieslocators.ui";
export class CookiesMethods
{
    readonly cookieslocators: CookiesLoctors;

    constructor(page: Page) {
        this.cookieslocators = new CookiesLoctors(page)
    }
    
    async clickOnCookies() {
        await this.cookieslocators.cookies.click();
    }
}