import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/protractor';
import { EligibilityPage } from '../pageObjects';

export const  ClickOnFAQLink = () =>
    Task.where(`#actor click on FAQ Link`,
        Click.on(EligibilityPage.FAQLink),
);