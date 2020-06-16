import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/protractor';
import { ContactDetailsPage } from '../pageObjects';

export const EnterMainContact = {
    of: (name: string, jobTitle: string, contactNo: string, email: string, alternateEmail: string) =>
        Task.where(`#actor enters name ${ name } job title ${ jobTitle} contact no ${ contactNo} email ${ email } alternateEmail ${ alternateEmail}`,
            Enter.theValue(name).into(ContactDetailsPage.mainContactPersonNameField),
            Enter.theValue(jobTitle).into(ContactDetailsPage.mainContactPersonJobTitleField),
            Enter.theValue(contactNo).into(ContactDetailsPage.mainContactPersonContactNoField),
            Enter.theValue(email).into(ContactDetailsPage.mainContactPersonEmailField),
            Enter.theValue(alternateEmail).into(ContactDetailsPage.mainContactPersonAlternateEmailField)),
};