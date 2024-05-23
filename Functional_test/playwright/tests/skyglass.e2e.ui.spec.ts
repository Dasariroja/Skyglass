import {test} from '@playwright/test';
import { CookiesMethods } from "../Modules/pages/cookiesmethods.ui";
import { HomeMethods } from '../Modules/pages/homemethods.ui';
import { ProductMethods } from '../Modules/pages/productmethods.ui';
const url = "https://www.sky.com/";

test.only('sky glass page', async ({ page }) => {
await page.goto(url);

const cookiesmethods = new CookiesMethods(page);
await cookiesmethods.clickOnCookies();

const homemethods = new HomeMethods(page);
await homemethods.clickOnGlassTv();
await homemethods.clickOnGetStarted();

const productmethods = new ProductMethods(page);
await productmethods.clickOnPinkColour();
await productmethods.clickOnSpeakerColour();
await productmethods.clickOnTvSize();
await page.mouse.wheel(0,500);
await page.waitForTimeout(3000);
await productmethods.clickOnDialogButton();
await productmethods.clickOnChoosePlanButton();
await productmethods.clickOnContinueButton();
});