import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class ApplicationFormPage {
     static proceedButton = Target.the('Proceed Button').located(by.id('keyPage-form-button'));
}
