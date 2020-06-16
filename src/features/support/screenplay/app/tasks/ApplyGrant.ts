import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/protractor';
import { ApplyForGrantPage } from '../pageObjects';

export const  ApplyGrant = () =>
    Task.where(`#actor click to apply grant`,
        Click.on(ApplyForGrantPage.applyGrantButton),
);