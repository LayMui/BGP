import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/protractor';
import { HomePage } from '../pageObjects';

export const Login = () =>
    Task.where(`#actor click to login`,
        Click.on(HomePage.loginButton),
);