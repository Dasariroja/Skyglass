import { Locator, Page } from "@playwright/test";

export class CookiesLoctors
{

    static readonly FRAME_COOKIES_LOCATOR = 'iframe[title="SP Consent Message"]';
    static readonly COOKIES = 'button:has-text("Accept all")';

    readonly frameCookiesLocator: Locator;
    readonly cookies: Locator;

    constructor(page: Page) {
        const frameCookiesLocator = page.frameLocator(CookiesLoctors.FRAME_COOKIES_LOCATOR);
        this.cookies = frameCookiesLocator.getByLabel('Accept all');
    }

}