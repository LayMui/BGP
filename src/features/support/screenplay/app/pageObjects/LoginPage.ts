import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class LoginPage {
    static CPUID              = Target.the('CPUID input').located(by.name('CPUID'));
    static CPUID_FullName     = Target.the('CPUID_Fullname input').located(by.name('CPUID_FullName'));
    static CPEntID            = Target.the('CPEntID input').located(by.name('CPEntID'));
    static CPRole             = Target.the('CPRole input').located(by.name('CPRole'));
    static CPRoleAcceptor     = Target.the('Acceptor option').located(by.css('select[name="CPRole"] > option[value="Acceptor"]'));
    static CPRolePreparer     = Target.the('Preparer option').located(by.css('select[name="CPRole"] > option[value="Preparer"]'));
    static CPRoleViewer       = Target.the('Viewer option').located(by.css('select[name="CPRole"] > option[value="Viewer"]'));
    static loginButton        = Target.the('SSO login button').located(by.buttonText('Login'));
}
