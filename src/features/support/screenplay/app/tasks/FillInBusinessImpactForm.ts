import { Task } from '@serenity-js/core';
import { Enter, Click, Press, Scroll } from '@serenity-js/protractor';
import { BusinessImpactPage } from '../pageObjects';
import { protractor } from 'protractor';

export const FillInBusinessImpactForm = {
    of: (FYEndDate: string, overseasSales: string, overseasInvestments: string, rationale: string, nonTangibleBenefits: string) =>
        Task.where(`#actor enters FY end date ${ FYEndDate} overseas sales ${ overseasSales} overseas investment ${overseasInvestments}`,
        Enter.theValue(FYEndDate).into(BusinessImpactPage.FYEndDate),
        Press.the(protractor.Key.ENTER).in(BusinessImpactPage.FYEndDate),
        Enter.theValue(overseasSales.split(',')[0]).into(BusinessImpactPage.overseasSales0),
        Enter.theValue(overseasSales.split(',')[1]).into(BusinessImpactPage.overseasSales1),
        Enter.theValue(overseasSales.split(',')[2]).into(BusinessImpactPage.overseasSales2),
        Enter.theValue(overseasSales.split(',')[3]).into(BusinessImpactPage.overseasSales3),
        Enter.theValue(overseasInvestments.split(',')[0]).into(BusinessImpactPage.overseasInvestments0),
        Enter.theValue(overseasInvestments.split(',')[1]).into(BusinessImpactPage.overseasInvestments1),
        Enter.theValue(overseasInvestments.split(',')[2]).into(BusinessImpactPage.overseasInvestments2),
        Enter.theValue(overseasInvestments.split(',')[3]).into(BusinessImpactPage.overseasInvestments3),
        Enter.theValue(rationale).into(BusinessImpactPage.rationaleForProjectionsRemarks),
        Enter.theValue(nonTangibleBenefits).into(BusinessImpactPage.nonTangibleBenefitsRemarks),
        Scroll.to(BusinessImpactPage.saveBtn),
        Click.on(BusinessImpactPage.saveBtn),
        Click.on(BusinessImpactPage.nextBtn)),
};