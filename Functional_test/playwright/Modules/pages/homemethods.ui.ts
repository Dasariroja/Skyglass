import { Page } from "@playwright/test";
import { HomeLocators } from "../components/homelocators.ui";

export class HomeMethods
{
   readonly homelocators : HomeLocators;

   constructor(page:Page)
   {
      this.homelocators = new HomeLocators(page);
   }

   async clickOnGlassTv()
   {
    await this.homelocators.glassTV.click();

   }

   async clickOnGetStarted()
   {
    await this.homelocators.getStartedButton.click();
   }
}