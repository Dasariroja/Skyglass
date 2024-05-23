import { Locator, Page } from "@playwright/test";

export class ProductLocators
{
   
    readonly selectTvPinkColour: Locator;
    readonly selectSpeakerColour:Locator;
    readonly sizeOfTv: Locator;
    readonly dialogClose:Locator;
    readonly choosePlan: Locator;
    readonly continueButton:Locator;


    constructor(page: Page) {

        this.selectTvPinkColour = page.locator('[data-test-id="frame-color-selector"]').getByLabel('Pink');
        this.selectSpeakerColour = page.locator('[data-test-id="speaker-color-selector"]').getByLabel('Green');
        this.sizeOfTv = page.locator('[data-test-id="configure-size-selection-65"]');
        this.dialogClose = page.locator('[data-test-id="modal-dialog-close"]');
        this.choosePlan = page.locator('[data-test-id="configure-choose-plan-CCA_24M_1199_20UFP"]');
        this.continueButton = page.locator('[data-test-id="configure-continue"]');


       
//     await page.locator('[data-test-id="configure-choose-plan-CCA_24M_1199_20UFP"]').click();


//     await page.locator('[data-test-id="configure-continue"]').click();

//     await page.locator('[data-test-id="sky-live-continue-cta"]').click();
          
  }
}