import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/protractor';
import { DeclareReviewPage } from '../pageObjects';

export const  FillInDeclareForm = () =>
    Task.where(`#actor fill in the declare and review form`,
        Click.on(DeclareReviewPage.noRadioBtn1),
        Click.on(DeclareReviewPage.noRadioBtn2),
        Click.on(DeclareReviewPage.noRadioBtn3),
        Click.on(DeclareReviewPage.noRadioBtn4),
        Click.on(DeclareReviewPage.noRadioBtn5),
        Click.on(DeclareReviewPage.noRadioBtn6),
        Click.on(DeclareReviewPage.noRadioBtn7),
        Click.on(DeclareReviewPage.yesRadioBtn8),
        Click.on(DeclareReviewPage.yesRadioBtn9),
        Click.on(DeclareReviewPage.acknowlegementCheckBox),
);