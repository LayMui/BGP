import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class MyGrantPage {
    static myGrants = Target.the('My Grants menu').located(by.id('sgds-nav-start'));
    static companyProfile = Target.the('Company profile').located(by.xpath('//*[@id="dashboard-menubox-app-company-profile"]'));
    static getNewGrants = Target.the('Apply for new grant').located(by.xpath('//*[@id="dashboard-menubox-app-apply-grant"]/section/div/div[2]/p'));
    static learnHowItWork = Target.the('Learn how it work').located(by.xpath('//*[@id="dashboard-menubox-app-how-it-works"]'));
}
