import { Task } from '@serenity-js/core';
import { Click, Enter, Clear } from '@serenity-js/protractor';
import { LoginPage } from '../pageObjects';

export const LoginStub = {
    of: (nric: string, name: string, uen: string, role: string) =>
        Task.where(`#actor enters username ${ nric } and name ${ name }`,
            Clear.theValueOf(LoginPage.CPUID),
            Enter.theValue(nric).into(LoginPage.CPUID),
            Clear.theValueOf(LoginPage.CPUID_FullName),
            Enter.theValue(name).into(LoginPage.CPUID_FullName),
            Clear.theValueOf(LoginPage.CPEntID),
            Enter.theValue(uen).into(LoginPage.CPEntID),
            Click.on(LoginPage.CPRole),
            Click.on(LoginPage.CPRoleAcceptor),
            Click.on(LoginPage.loginButton),
        ),
};