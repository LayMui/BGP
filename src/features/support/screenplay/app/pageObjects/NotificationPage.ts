import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class NotificationPage {
    static toastMessage = Target.the('My Grants menu').located(by.id('growls'));
}
