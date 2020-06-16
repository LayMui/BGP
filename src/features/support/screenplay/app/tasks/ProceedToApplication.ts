import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/protractor';
import { ApplicationFormPage } from '../pageObjects';

export const  ProceedToApplication = () =>
Task.where(`#actor proceed to application form`,
        Click.on(ApplicationFormPage.proceedButton),
);