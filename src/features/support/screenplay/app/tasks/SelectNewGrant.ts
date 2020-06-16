import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/protractor';
import { MyGrantPage } from '../pageObjects';

export const  SelectNewGrant = () =>
   Task.where(`#actor select new grant`,
       Click.on(MyGrantPage.getNewGrants),
);