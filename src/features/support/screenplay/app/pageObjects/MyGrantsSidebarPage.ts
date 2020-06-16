import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class MyGrantsSideBarPage {
    static eligibility = Target.the('Eligibility menu').located(by.cssContainingText('.menu-text', 'Eligibility'));
    static contactDetails = Target.the('Contact Details menu').located(by.cssContainingText('.menu-text', 'Contact Details'));
    static proposal = Target.the('Proposal menu').located(by.cssContainingText('.menu-text', 'Proposal'));
    static businessImpact = Target.the('Business Impact menu').located(by.cssContainingText('.menu-text', 'Business Impact'));
    static cost = Target.the('Cost menu').located(by.cssContainingText('.menu-text', 'Cost'));
    static declare = Target.the('Declare & Review menu').located(by.cssContainingText('.menu-text', 'Declare & Review'));
}
