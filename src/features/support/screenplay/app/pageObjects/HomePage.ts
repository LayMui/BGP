import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class HomePage {
    static loginButton  = Target.the('login button').located(by.id('login-button'));
    static logoutButton = Target.the('logout button').located(by.id('logout-button'));
    static loginWithCorpPassButton = Target.the('login with Corp Pass button').located(by.cssContainingText('.bgp-btn.bgp-btn-loginCorpPass', 'Login with CorpPass'));
}