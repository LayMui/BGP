import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/protractor';
import { ApplyForGrantPage } from '../pageObjects';

export const SelectDevelopment = {
    of: (development: string ) =>
        Task.where(`#actor select #development ${ development }`,
            Click.on(ApplyForGrantPage.marketReadinessAssistance),
        ),
};
