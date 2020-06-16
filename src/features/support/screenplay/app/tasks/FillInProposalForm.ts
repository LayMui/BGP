import { Task } from '@serenity-js/core';
import { Click, Enter, Press, Scroll, DoubleClick } from '@serenity-js/protractor';
import { protractor } from 'protractor';
import { ProposalPage } from '../pageObjects';

export const FillInProposalForm = {
    of: (projectTitle: string, projectDescription: string, startDate: string, endDate: string, activity: string, targetMarket: string) =>
        Task.where(`#actor enters project title ${ projectTitle } project description ${ projectDescription} startDate ${startDate} endDate ${endDate}`,
        Enter.theValue(projectTitle).into(ProposalPage.projectTitle),
        Enter.theValue(startDate).into(ProposalPage.startDate),
        Press.the(protractor.Key.ENTER).in(ProposalPage.startDate),
        Enter.theValue(endDate).into(ProposalPage.endDate),
        Press.the(protractor.Key.ENTER).in(ProposalPage.endDate),
        Enter.theValue(projectDescription).into(ProposalPage.projectDescription),
        Scroll.to(ProposalPage.activity),
        Click.on(ProposalPage.activity),
        Enter.theValue(activity).into(ProposalPage.inputComboBoxValueForActivity),
      //  Press.the(protractor.Key.ENTER).in(ProposalPage.inputComboBoxForActivity),
        Click.on(ProposalPage.targetMarket),
        Enter.theValue(targetMarket).into(ProposalPage.inputComboBoxValueForTargetMarket),
      //  Press.the(protractor.Key.ENTER).in(ProposalPage.inputComboBoxForTargetMarket),
        Click.on(ProposalPage.firstTimeExpandYes),
        Click.on(ProposalPage.saveBtn),
        Click.on(ProposalPage.nextBtn))

};