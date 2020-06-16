import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class GrantPage {
    static internationalExpansion = Target.the('International Expansion picker option').located(by.id('International Expansion'));
    static capabilityDevelopment = Target.the('Capability Development picker option').located(by.id('Capability Development'));
}
