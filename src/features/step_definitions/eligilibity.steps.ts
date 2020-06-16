import { and, endsWith, Ensure, startsWith, Check, equals, matches, includes } from '@serenity-js/assertions';
import { Actor, actorCalled, actorInTheSpotlight, engage, Log, See, WithStage, Duration } from '@serenity-js/core';
import { BrowseTheWeb, isEnabled, isVisible, Navigate, Wait, Website, isClickable, ResizeBrowserWindow, Scroll, Click, isPresent, ExecuteScript, Text, Window, isSelected } from '@serenity-js/protractor';
import { Before, Given, Then, When } from 'cucumber';
import {
    Actors,
    Login,
    LoginStub,
    SelectDevelopment,
    SelectFunctional,
    SelectNewGrant,
    SelectSector,
} from '../support/screenplay';
import {
    ApplicationFormPage, ApplyForGrantPage, EligibilityPage, GrantPage, SectorPage, MyGrantPage, HomePage, LoginPage, NotificationPage,
 } from '../support/screenplay/app/pageObjects';
import { ApplyGrant } from '../support/screenplay/app/tasks/ApplyGrant';
import { ProceedToApplication } from '../support/screenplay/app/tasks/ProceedToApplication';
import { protractor, ProtractorBrowser, browser } from 'protractor';

Before(() => engage(new Actors()));

Given(/^(.*) is at the portal page$/, (actorName: string) =>
    actorCalled(actorName).attemptsTo(
        Navigate.to('/'),
        Check.whether(HomePage.loginButton, isVisible())
        .andIfSo(Login()),
        Check.whether(HomePage.loginWithCorpPassButton, isVisible())
        .andIfSo(Click.on(HomePage.loginWithCorpPassButton)),
));

When(/(?:he|she|they) login with "(.*)", "(.*)", "(.*)" and "(.*)"/, (nric: string, name: string, uen: string, role: string) =>
    actorInTheSpotlight().attemptsTo(
        Check.whether(LoginPage.CPUID, isVisible())
        .andIfSo(LoginStub.of(nric, name, uen, role)),
));

// tslint:disable-next-line: max-line-length
When(/(?:he|she|they) selects new grant, sector "(.*)", development "(.*)" and functional area "(.*)" to create the draft form/, (sector: string, development: string, functional: string) =>
    actorInTheSpotlight().attemptsTo(
        Wait.for(Duration.ofMilliseconds(10000)),
        Check.whether(MyGrantPage.getNewGrants, isVisible())
        .andIfSo(SelectNewGrant()),
        Check.whether(SectorPage.IT, isVisible())
        .andIfSo(SelectSector.of(sector)),
        Check.whether(GrantPage.internationalExpansion, isVisible())
        .andIfSo(SelectFunctional.of(functional)),
        Check.whether(ApplyForGrantPage.marketReadinessAssistance, isVisible())
        .andIfSo(SelectDevelopment.of(development)),
        Check.whether(ApplyForGrantPage.applyGrantButton, isVisible())
        .andIfSo(ApplyGrant()),
));

When(/^(?:he|she|they) proceed to enter the application form$/, () =>
    actorInTheSpotlight().attemptsTo(
        Wait.until(ApplicationFormPage.proceedButton, isVisible()),
        Check.whether(ApplicationFormPage.proceedButton, isClickable())
        .andIfSo(ProceedToApplication()),
));

Then(/^(?:he|she|they) should see 4 questions in the eligibility section$/, () =>
    actorInTheSpotlight().attemptsTo(
    Ensure.that(EligibilityPage.yesRadioBtn1, isVisible()),
    Ensure.that(EligibilityPage.noRadioBtn1, isVisible()),
    Ensure.that(EligibilityPage.yesRadioBtn2, isVisible()),
    Ensure.that(EligibilityPage.noRadioBtn2, isVisible()),
    Ensure.that(EligibilityPage.yesRadioBtn3, isVisible()),
    Ensure.that(EligibilityPage.noRadioBtn3, isVisible()),
    Ensure.that(EligibilityPage.yesRadioBtn4, isVisible()),
    Ensure.that(EligibilityPage.noRadioBtn4, isVisible()),

    Ensure.that(EligibilityPage.yesRadioBtn1, isClickable()),
    Ensure.that(EligibilityPage.noRadioBtn1, isClickable()),
    Ensure.that(EligibilityPage.yesRadioBtn2, isClickable()),
    Ensure.that(EligibilityPage.noRadioBtn2, isClickable()),
    Ensure.that(EligibilityPage.yesRadioBtn3, isClickable()),
    Ensure.that(EligibilityPage.noRadioBtn3, isClickable()),
    Ensure.that(EligibilityPage.yesRadioBtn4, isClickable()),
    Ensure.that(EligibilityPage.noRadioBtn4, isClickable()),
));

Then(/^(?:he|she|they) will see 4 set of Yes and No radio buttons for selection$/,  () =>
    actorInTheSpotlight().attemptsTo(
    Wait.until(EligibilityPage.yesRadioBtn1, isVisible()),
    Ensure.that(EligibilityPage.yesRadioBtn1, isClickable()),
    Wait.until(EligibilityPage.noRadioBtn1, isVisible()),
    Ensure.that(EligibilityPage.noRadioBtn1, isClickable()),
    Wait.until(EligibilityPage.yesRadioBtn2, isVisible()),
    Ensure.that(EligibilityPage.yesRadioBtn2, isClickable()),
    Wait.until(EligibilityPage.noRadioBtn2, isVisible()),
    Ensure.that(EligibilityPage.noRadioBtn2, isClickable()),
    Wait.until(EligibilityPage.yesRadioBtn3, isVisible()),
    Ensure.that(EligibilityPage.yesRadioBtn3, isClickable()),
    Wait.until(EligibilityPage.noRadioBtn3, isVisible()),
    Ensure.that(EligibilityPage.noRadioBtn3, isClickable()),
    Wait.until(EligibilityPage.yesRadioBtn4, isVisible()),
    Ensure.that(EligibilityPage.yesRadioBtn4, isClickable()),
    Wait.until(EligibilityPage.noRadioBtn4, isVisible()),
    Ensure.that(EligibilityPage.noRadioBtn4, isClickable()),
));

When(/^(?:he|she|they) select No for question "(.*)"$/, (question: string) => {
    switch (question) {
        case '1':
            actorInTheSpotlight().attemptsTo(
                Wait.until(EligibilityPage.noRadioBtn1, isVisible()),
                Check.whether(EligibilityPage.noRadioBtn1, isClickable())
                .andIfSo(Click.on(EligibilityPage.noRadioBtn1)));
            break;

        case '2':
            actorInTheSpotlight().attemptsTo(
                Click.on(EligibilityPage.noRadioBtn2));
            break;
        case '3':
            actorInTheSpotlight().attemptsTo(
                Click.on(EligibilityPage.noRadioBtn3));
            break;
        case '4':
            actorInTheSpotlight().attemptsTo(
                Click.on(EligibilityPage.noRadioBtn4));
            break;
        default:
            actorInTheSpotlight().attemptsTo(
                Click.on(EligibilityPage.noRadioBtn5));
            break;
    }
});

Then(/^(?:he|she|they) should see a warning message$/, () =>
    actorInTheSpotlight().attemptsTo(
        Wait.until(EligibilityPage.warningMessage, isVisible()),
        Ensure.that(Text.of(EligibilityPage.warningMessage),
            startsWith('The applicant may not meet the eligibility criteria for this grant')),
));

Then(/^(?:he|she|they) should see a warning message with the FAQ link$/, () =>
    actorInTheSpotlight().attemptsTo(
        Wait.until(EligibilityPage.warningMessage, isVisible()),
        Ensure.that(Text.of(EligibilityPage.warningMessage), includes('FAQ')),
));

When(/^(?:he|she|they) click on the FAQ link$/, () => 
    actorInTheSpotlight().attemptsTo(
        Check.whether(EligibilityPage.FAQLink, isClickable())
        .andIfSo(Click.on(EligibilityPage.FAQLink)),
));

Then(/^(?:he|she|they) should be redirected to the web url "(.*)" in another window tab$/, (url: string) =>
            actorInTheSpotlight().attemptsTo(
                Wait.for(Duration.ofMilliseconds(10000)),
                // BrowseTheWeb.as(actorInTheSpotlight()).switchTo().window(tabs.get(1)),
                //protractor.browser.switchTo().window(tabs.get(1)),
                Log.the('Using SerenityJS API for driver.switchTo().window(tabs.get(1))')  
 ));

When(/^(?:he|she|they) select Yes to all 4 questions and click Save to save all his inputs$/, () =>
    actorInTheSpotlight().attemptsTo(
    Check.whether(EligibilityPage.yesRadioBtn1, isVisible())
    .andIfSo(Click.on(EligibilityPage.yesRadioBtn1)),
    Check.whether(EligibilityPage.yesRadioBtn2, isVisible())
    .andIfSo(Click.on(EligibilityPage.yesRadioBtn2)),
    Check.whether(EligibilityPage.yesRadioBtn3, isVisible())
    .andIfSo(Click.on(EligibilityPage.yesRadioBtn3)),
    Check.whether(EligibilityPage.yesRadioBtn4, isVisible())
    .andIfSo(Click.on(EligibilityPage.yesRadioBtn4),
    Check.whether(EligibilityPage.yesRadioBtn5, isVisible())
    .andIfSo(Click.on(EligibilityPage.yesRadioBtn5)),
    Check.whether(EligibilityPage.saveBtn, isVisible())
    .andIfSo(Click.on(EligibilityPage.saveBtn)),
)));

Then(/^(?:he|she|they) should be able to save all the inputs$/, () =>
    actorInTheSpotlight().attemptsTo(
        Wait.until(NotificationPage.toastMessage, isVisible()),
));

When(/^(?:he|she|they) refresh the eligibility page$/, async () =>
    actorInTheSpotlight().attemptsTo(await protractor.browser.refresh(),
));

Then(/^(?:he|she|they) should see the saved values in the refresh page$/, () =>
    actorInTheSpotlight().attemptsTo(
        Wait.until(EligibilityPage.yesRadioBtn1, isVisible()),
        Ensure.that(EligibilityPage.yesRadioBtn1, isSelected()),
        Wait.until(EligibilityPage.yesRadioBtn2, isVisible()),
        Ensure.that(EligibilityPage.yesRadioBtn2, isSelected()),
        Wait.until(EligibilityPage.yesRadioBtn3, isVisible()),
        Ensure.that(EligibilityPage.yesRadioBtn3, isSelected()),
        Wait.until(EligibilityPage.yesRadioBtn4, isVisible()),
        Ensure.that(EligibilityPage.yesRadioBtn4, isSelected()),
        Wait.until(EligibilityPage.yesRadioBtn5, isVisible()),
        Ensure.that(EligibilityPage.yesRadioBtn5, isSelected()),
));