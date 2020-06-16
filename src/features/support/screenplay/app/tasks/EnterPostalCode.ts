import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/protractor';
import { ContactDetailsPage } from '../pageObjects';

export const EnterPostalCode = {
    of: (postalCode: string) =>
        Task.where(`#actor enters postal code ${ postalCode }`,
            Enter.theValue(postalCode).into(ContactDetailsPage.mainContactPersonPostalCodeField),
        ),
};