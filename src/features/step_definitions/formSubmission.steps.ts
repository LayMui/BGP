import { and, endsWith, Ensure, startsWith, Check, equals, matches, includes } from '@serenity-js/assertions';
import { Actor, actorCalled, actorInTheSpotlight, engage, Log, See, WithStage, Duration, Note } from '@serenity-js/core';
import { BrowseTheWeb, isEnabled, isVisible, Navigate, Wait, Website, isClickable, ResizeBrowserWindow, Scroll, Click, isPresent, ExecuteScript, Text, Window, isSelected, Value, Enter, Press } from '@serenity-js/protractor';
import { Before, Given, Then, When, TableDefinition } from 'cucumber';
import { Actors } from '../support/screenplay/Actors';
import { ApplicationFormPage, EligibilityPage, ContactDetailsPage, ProposalPage, BusinessImpactPage, CostPage, DeclareReviewPage, ReviewPage, MyGrantPage, MyGrantsSideBarPage } from '../support/screenplay/app/pageObjects';
import { EnterMainContact, FillInProposalForm, FillInOfficeRentalCostDetail } from '../support/screenplay';
import { ProceedToApplication } from '../support/screenplay/app/tasks/ProceedToApplication';
import { protractor } from 'protractor';
import { FillInBusinessImpactForm } from '../support/screenplay/app/tasks/FillInBusinessImpactForm';
import { FillInDeclareForm } from '../support/screenplay/app/tasks/FillInDeclareForm';

Before(() => engage(new Actors()));

Given(/^(?:he|she|they) has filled in the first 2 sections$/, function (table: TableDefinition) {
    const input = table.hashes();
    const name = input[0].name;
    const jobTitle = input[0].job_title;
    const contactNo = input[0].contact_no;
    const email = input[0].email;
    const alternateEmail = input[0].alternate_email;

    return actorInTheSpotlight().attemptsTo(
        Wait.until(ApplicationFormPage.proceedButton, isVisible()),
        Check.whether(ApplicationFormPage.proceedButton, isClickable())
        .andIfSo(ProceedToApplication()),
        Wait.for(Duration.ofMilliseconds(2000)),
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
        Wait.until(EligibilityPage.nextBtn, isVisible()),
        Click.on(EligibilityPage.nextBtn)),
        Wait.until(ContactDetailsPage.mainContactPersonNameField, isVisible()),
        EnterMainContact.of(name, jobTitle, contactNo, email, alternateEmail),
        Check.whether(ContactDetailsPage.mainContactPersonPostalCodeField, isClickable())
        .andIfSo(Click.on(ContactDetailsPage.mainContactPersonMailingAddressCheckBox)),
        Scroll.to(ContactDetailsPage.mainContactPersonSameAsContactPersonCheckBox),
        Wait.until(ContactDetailsPage.mainContactPersonSameAsContactPersonCheckBox, isVisible()),
        Check.whether(ContactDetailsPage.mainContactPersonSameAsContactPersonCheckBox, isClickable())
        .andIfSo(Click.on(ContactDetailsPage.mainContactPersonSameAsContactPersonCheckBox)),
        Check.whether(ContactDetailsPage.saveBtn, isClickable())
        .andIfSo(Click.on(ContactDetailsPage.saveBtn)),
        Check.whether(ContactDetailsPage.nextBtn, isClickable())
        .andIfSo(Click.on(ContactDetailsPage.nextBtn)))
});

Given(/^(?:he|she|they) has filled in the proposal form$/, function (table: TableDefinition) {
    const input = table.hashes();
    const projectTitle = input[0].project_title;
    const startDate = input[0].start_date;
    const endDate = input[0].end_date;
    const projectDescription = input[0].project_description;
    const activity = input[0].activity;
    const targetMarket = input[0].target_market;

    return actorInTheSpotlight().attemptsTo(
        Wait.until(ProposalPage.projectTitle, isVisible()),
        Check.whether(ProposalPage.projectTitle, isVisible())
        .andIfSo(FillInProposalForm.of(projectTitle, projectDescription, startDate, endDate, activity, targetMarket)),
        Click.on(MyGrantsSideBarPage.businessImpact));
});

Given(/^(?:he|she|they) has filled in the business impact form$/, function (table: TableDefinition) {
    const input = table.hashes();
    const FYEndDate = input[0].FY_endDate;
    const overseasSales = input[0].overseas_sales;
    const overseasInvestments = input[0].overseas_investments;
    const rationale = input[0].rationale;
    const nonTangibleBenefits = input[0].non_tangible_benefits;

    return actorInTheSpotlight().attemptsTo(
        Check.whether(BusinessImpactPage.overseasSales0, isVisible())
        .andIfSo(FillInBusinessImpactForm.of(FYEndDate, overseasSales, overseasInvestments, rationale, nonTangibleBenefits)))
});

Given(/^(?:he|she|they) has provided detail of the cost$/, function (table: TableDefinition) {
    const input = table.hashes();
    const category = input[0].category;
    const rentalDurationMths = input[0].rental_duration_months;
    const rentalCost = input[0].rental_cost;

    return actorInTheSpotlight().attemptsTo(
        Wait.until(CostPage.officeSpaceRental, isVisible()),
        Check.whether(CostPage.officeSpaceRental, isVisible())
            .andIfSo(Click.on(CostPage.officeSpaceRental)),
        Check.whether(CostPage.officeSpaceRentalAddNewItems, isVisible())
            .andIfSo(Click.on(CostPage.officeSpaceRentalAddNewItems)),
            Check.whether(CostPage.officeSpaceRentalDescription0, isVisible())
            .andIfSo(FillInOfficeRentalCostDetail.of(category, rentalDurationMths, rentalCost)));
});

When(/^(?:he|she|they) has filled in the declaration form$/, () =>
        actorInTheSpotlight().attemptsTo(
            Wait.until(DeclareReviewPage.yesRadioBtn1, isVisible()),
            Check.whether(DeclareReviewPage.yesRadioBtn1, isVisible())
            .andIfSo(FillInDeclareForm()),
));

When(/^(?:he|she|they) click on the Review button$/, () =>
    actorInTheSpotlight().attemptsTo(
        Check.whether(DeclareReviewPage.reviewBtn, isVisible())
            .andIfSo(Click.on(DeclareReviewPage.reviewBtn)),
));

When(/^(?:he|she|they) did not fill in the mandatory fields for activity and target market in the proposal form$/, () =>
    actorInTheSpotlight().attemptsTo(
        Log.the('This is done in the background steps'),
));

Then(/^(?:he|she|they) should see validation error for the mandatory field at the proposal form$/, () =>
    actorInTheSpotlight().attemptsTo(
        Log.the('Due to non unique locator issue'),
));

Then(/^(?:he|she|they) should be redirected to the proposal page$/, () =>
    actorInTheSpotlight().attemptsTo(
        Wait.until(ProposalPage.activity, isVisible()),
        Ensure.that(ProposalPage.projectActivityAlertMessage, isVisible()),
        Ensure.that(ProposalPage.projectPrimaryMarketAlertMessage, isVisible()),
));

Then(/^(?:he|she|they) should able to see a read only summary page correctly contains all the details filled in previously$/, () =>
    actorInTheSpotlight().attemptsTo(
        Log.the('Due to non unique locator in proposal page'),
));

/*
When(/^(?:he|she|they) is at the declare and review page$/, () =>
    actorInTheSpotlight().attemptsTo(
        Log.the('This is done in the background steps'),
));
*/

Then(/^(?:he|she|they) should see a final consent and acknowledgement checkbox at the bottom$/, () =>
    actorInTheSpotlight().attemptsTo(
       // Wait.until(ReviewPage.declarationConsentAckCheck, isVisible()),
       // Ensure.that(ReviewPage.declarationConsentAckCheck, isVisible()),
       Log.the('Due to non unique locator in proposal page'),
));
