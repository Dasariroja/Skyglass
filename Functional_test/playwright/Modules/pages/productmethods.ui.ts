import { Page } from "@playwright/test";
import { ProductLocators } from "../components/productlocators.ui";

export class ProductMethods
{
   readonly productlocators: ProductLocators;
   

   constructor(page:Page)
   {
    this.productlocators = new ProductLocators(page);
   }

   async clickOnPinkColour()
   {
    await this.productlocators.selectTvPinkColour.click();
   }
   async clickOnSpeakerColour()
   {
    await this.productlocators.selectSpeakerColour.click();
   }
   async clickOnTvSize()
   {
    await this.productlocators.sizeOfTv.click();
   }
   async clickOnDialogButton()
   {
   await this.productlocators.dialogClose.click();
   }
   async clickOnChoosePlanButton()
   {
    await this.productlocators.choosePlan.click();
   }
   async clickOnContinueButton()
   {
    await this.productlocators.continueButton.click();
   }
   
}