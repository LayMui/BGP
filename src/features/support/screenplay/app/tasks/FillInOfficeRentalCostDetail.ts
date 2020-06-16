import { Task } from '@serenity-js/core';
import { Enter, Click, Press, Scroll } from '@serenity-js/protractor';
import { CostPage } from '../pageObjects';
import { protractor } from 'protractor';

export const FillInOfficeRentalCostDetail = {
    of:  (rentalDescription: string, rentalDurationMonths: string, rentalCost: string) =>
        Task.where(`#actor enters office rental description ${ rentalDescription} office rental duration ${ rentalDurationMonths} office rental cost ${ rentalCost}`,
        Enter.theValue(rentalDescription).into(CostPage.officeSpaceRentalDescription0),
        Enter.theValue(rentalDurationMonths).into(CostPage.officeSpaceRentalDuration0),
      //  Press.the(protractor.Key.ENTER).in(CostPage.officeSpaceRentalDuration0),
        Enter.theValue(rentalCost).into(CostPage.officeSpaceRentalAmount0),
      //  Press.the(protractor.Key.ENTER).in(CostPage.officeSpaceRentalAmount0),
        Scroll.to(CostPage.saveBtn),
        Click.on(CostPage.saveBtn),
        Click.on(CostPage.nextBtn)),
};