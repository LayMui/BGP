import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/protractor';
import { GrantPage } from '../pageObjects';

export const SelectFunctional = {
    of: (functional: string ) =>
        Task.where(`#actor select #functional ${ functional }`,
            Click.on(GrantPage.internationalExpansion),
        ),
};