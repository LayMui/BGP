import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class ApplyForGrantPage {
    static marketReadinessAssistance = Target.the('Market Readiness Assistance').located(by.id('Market Readiness Assistance 2'));
    static marketAccessAndDevelopment = Target.the('Market Access And Development').located(by.id('Market Access & Development'));
    static applyGrantButton = Target.the('Apply Button').located(by.id('go-to-grant'));

}
