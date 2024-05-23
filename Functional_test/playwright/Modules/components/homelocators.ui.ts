import { Locator, Page } from "@playwright/test";

export class HomeLocators
{
    //static readonly GLASS_TV = '[data-test-id="header-nav-group"]';
    //static readonly GET_STARTED_BUTTON = 'button:has-text("Accept all")';

    readonly glassTV: Locator;
    readonly getStartedButton: Locator;

    constructor(page: Page) {

        this.glassTV = page.locator('[data-test-id="header-nav-group"]').getByRole('link', { name: 'Glass' });
        this.getStartedButton= page.locator('div').filter({ hasText: /^Get started$/ }).getByRole('link');
    
}
}