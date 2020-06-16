import { and, endsWith, Ensure, startsWith, Check, equals, matches, includes } from '@serenity-js/assertions';
import { Actor, actorCalled, actorInTheSpotlight, engage, Log, See, WithStage, Duration, Note } from '@serenity-js/core';
import { BrowseTheWeb, isEnabled, isVisible, Navigate, Wait, Website, isClickable, ResizeBrowserWindow, Scroll, Click, isPresent, ExecuteScript, Text, Window, isSelected, Value } from '@serenity-js/protractor';
import { Before, Given, Then, When, TableDefinition } from 'cucumber';
import {
    Actors, Login, LoginStub, SelectNewGrant, SelectSector, SelectFunctional, SelectDevelopment, EnterMainContact,
} from '../support/screenplay';
import { HomePage, LoginPage, EligibilityPage, ContactDetailsPage, MyGrantPage, SectorPage, GrantPage, ApplyForGrantPage, ApplicationFormPage, NotificationPage } from '../support/screenplay/app/pageObjects';
import { ApplyGrant } from '../support/screenplay/app/tasks/ApplyGrant';
import { ProceedToApplication } from '../support/screenplay/app/tasks/ProceedToApplication';
import { EnterPostalCode } from '../support/screenplay/app/tasks/EnterPostalCode';
import { protractor } from 'protractor';

Before(() => engage(new Actors()));

Given(/^(.*) has login at the portal$/, function (actorName: string, table: TableDefinition) {
    const input = table.hashes();
    const nric = input[0].nric;
    const name = input[0].name;
    const uen = input[0].uen;
    const role = input[0].role;

    return actorCalled(actorName).attemptsTo(
        Navigate.to('/'),
        Check.whether(HomePage.loginButton, isVisible())
        .andIfSo(Login()),
        Check.whether(LoginPage.CPUID, isVisible())
        .andIfSo(LoginStub.of(nric, name, uen, role)))
});

Given(/^(?:he|she|they) has selected the sector, development and functional area for the new grants$/, function (table: TableDefinition) {
    const input = table.hashes();
    const sector = input[0].sector;
    const development = input[0].development;
    const functional = input[0].functional;

    return actorInTheSpotlight().attemptsTo(
        Wait.for(Duration.ofMilliseconds(10000)),
       // Wait.upTo(Duration.ofSeconds(20)).until(MyGrantPage.getNewGrants, isVisible()),
        Check.whether(MyGrantPage.getNewGrants, isVisible())
        .andIfSo(SelectNewGrant()),
        Check.whether(SectorPage.IT, isVisible())
        .andIfSo(SelectSector.of(sector)),
        Check.whether(GrantPage.internationalExpansion, isVisible())
        .andIfSo(SelectFunctional.of(functional)),
        Check.whether(ApplyForGrantPage.marketReadinessAssistance, isVisible())
        .andIfSo(SelectDevelopment.of(development)),
        Check.whether(ApplyForGrantPage.applyGrantButton, isVisible())
        .andIfSo(ApplyGrant()));
});

When(/^(?:he|she|they) has filled in the Eligibility section$/, () =>
actorInTheSpotlight().attemptsTo(
        Wait.until(ApplicationFormPage.proceedButton, isVisible()),
        Check.whether(ApplicationFormPage.proceedButton, isClickable())
        .andIfSo(ProceedToApplication()),
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
        .andIfSo(Click.on(EligibilityPage.saveBtn)))
));

When(/^(?:he|she|they) click Next on the Eligibility section page$/, () =>
actorInTheSpotlight().attemptsTo(
        Wait.until(EligibilityPage.nextBtn, isVisible()),
        Click.on(EligibilityPage.nextBtn),
));

Then(/^(?:he|she|they) should go to the Contact Details page$/, () =>
    actorInTheSpotlight().attemptsTo(
        Wait.for(Duration.ofMilliseconds(10000)),
        Ensure.that(ContactDetailsPage.mainContactPersonNameField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonJobTitleField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonContactNoField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonEmailField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonAlternateEmailField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonMailingAddressCheckBox, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonPostalCodeField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonBlkHseNoField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonStreetField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonLevelField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonUnitField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonBuildingNameField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonBuildingNameField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonSameAsContactPersonCheckBox, isVisible()),
        Ensure.that(ContactDetailsPage.letterOfOfferAddresseeNameField, isVisible()),
        Ensure.that(ContactDetailsPage.letterOfOfferAddresseeDesignationField, isVisible()),
        Ensure.that(ContactDetailsPage.letterOfOfferAddresseeEmailField, isVisible()),
));

When(/^(?:he|she|they) should see the Contact Details page also contains the Letter of Offeree subsection$/, () =>
    actorInTheSpotlight().attemptsTo(
        Wait.for(Duration.ofMilliseconds(10000)),
        Ensure.that(ContactDetailsPage.mainContactPersonNameField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonJobTitleField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonContactNoField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonEmailField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonAlternateEmailField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonMailingAddressCheckBox, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonPostalCodeField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonBlkHseNoField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonStreetField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonLevelField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonUnitField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonBuildingNameField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonBuildingNameField, isVisible()),
        Ensure.that(ContactDetailsPage.mainContactPersonSameAsContactPersonCheckBox, isVisible()),
        Ensure.that(ContactDetailsPage.letterOfOfferAddresseeNameField, isVisible()),
        Ensure.that(ContactDetailsPage.letterOfOfferAddresseeDesignationField, isVisible()),
        Ensure.that(ContactDetailsPage.letterOfOfferAddresseeEmailField, isVisible()),
));

When(/^(?:he|she|they) enter the valid postal code "(.*)"$/, (postalCode: string) =>
actorInTheSpotlight().attemptsTo(
        Wait.until(ContactDetailsPage.mainContactPersonPostalCodeField, isVisible()),
        EnterPostalCode.of(postalCode),
));

Then(/^(?:he|she|they) should see the system auto-populate blk with "(.*)" and street details "(.*)"/, (blk: string, street: string) =>
    actorInTheSpotlight().attemptsTo(
        Wait.until(ContactDetailsPage.sameAsRegisteredAddressText, isVisible()),
        Ensure.that(Value.of(ContactDetailsPage.mainContactPersonBlkHseNoField),
            equals(blk)),
        Ensure.that(Value.of(ContactDetailsPage.mainContactPersonStreetField),
        equals(street)),
));

Then(/^(?:he|she|they) should see a checkbox option same as registered address in company profile$/, () =>
    actorInTheSpotlight().attemptsTo(
        Wait.until(ContactDetailsPage.mainContactPersonMailingAddressCheckBox, isVisible()),
        Ensure.that(ContactDetailsPage.sameAsRegisteredAddressText, isVisible()),
));

When(/^(?:he|she|they) click on the checkbox option to indicate same as registered address in company profile$/, () =>
actorInTheSpotlight().attemptsTo(
        Check.whether(ContactDetailsPage.mainContactPersonPostalCodeField, isClickable())
        .andIfSo(Click.on(ContactDetailsPage.mainContactPersonMailingAddressCheckBox)),
));

// tslint:disable-next-line: max-line-length
Then(/^(?:he|she|they) should see the mailing address auto-populate with postal code "(.*)" blk "(.*)" street "(.*)" level "(.*)" and unit "(.*)"/,  (postalCode: string, blk: string, street: string, level: string, unit: string) =>
    actorInTheSpotlight().attemptsTo(
        Wait.until(ContactDetailsPage.sameAsRegisteredAddressText, isVisible()),
        Ensure.that(Value.of(ContactDetailsPage.mainContactPersonPostalCodeField),
            equals(postalCode)),
        Ensure.that(Value.of(ContactDetailsPage.mainContactPersonBlkHseNoField),
            equals(blk)),
        Ensure.that(Value.of(ContactDetailsPage.mainContactPersonStreetField),
        equals(street)),
        Ensure.that(Value.of(ContactDetailsPage.mainContactPersonLevelField),
        equals(level)),
        Ensure.that(Value.of(ContactDetailsPage.mainContactPersonUnitField),
        equals(unit)),
));

Then(/^(?:he|she|they) should see an option same as main contact person$/, () =>
    actorInTheSpotlight().attemptsTo(
        Wait.until(ContactDetailsPage.mainContactPersonSameAsContactPersonCheckBox, isVisible()),
        Ensure.that(ContactDetailsPage.sameAsContactPersonText, isVisible()),
));

// tslint:disable-next-line: max-line-length
When(/^(?:he|she|they) enter the contact details name "(.*)" job title "(.*)" contact no "(.*)" email "(.*)" alternate email "(.*)"/, (name: string, jobTitle: string, contactNo: string, email: string, alternateEmail: string) =>
actorInTheSpotlight().attemptsTo(
        Wait.until(ContactDetailsPage.mainContactPersonNameField, isVisible()),
        EnterMainContact.of(name, jobTitle, contactNo, email, alternateEmail),
));

When(/^(?:he|she|they) click the option same as main contact person$/, () =>
actorInTheSpotlight().attemptsTo(
        Scroll.to(ContactDetailsPage.mainContactPersonSameAsContactPersonCheckBox),
        Wait.until(ContactDetailsPage.mainContactPersonSameAsContactPersonCheckBox, isVisible()),
        Check.whether(ContactDetailsPage.mainContactPersonSameAsContactPersonCheckBox, isClickable())
        .andIfSo(Click.on(ContactDetailsPage.mainContactPersonSameAsContactPersonCheckBox)),
));

// tslint:disable-next-line: max-line-length
Then(/^(?:he|she|they) should see the Letter of Offeree subsection auto-populate with name "(.*)" job title "(.*)" and email "(.*)"/,  (name: string, jobTitle: string, email: string) =>
    actorInTheSpotlight().attemptsTo(
        Wait.until(ContactDetailsPage.letterOfOfferAddresseeNameField, isVisible()),
        Ensure.that(Value.of(ContactDetailsPage.letterOfOfferAddresseeNameField),
            equals(name)),
        Ensure.that(Value.of(ContactDetailsPage.letterOfOfferAddresseeDesignationField),
            equals(jobTitle)),
        Ensure.that(Value.of(ContactDetailsPage.letterOfOfferAddresseeEmailField),
        equals(email)),
));

When(/^(?:he|she|they) select the 2 checkbox options to populate$/, () =>
actorInTheSpotlight().attemptsTo(
        Scroll.to(ContactDetailsPage.mainContactPersonSameAsContactPersonCheckBox),
        Wait.until(ContactDetailsPage.mainContactPersonSameAsContactPersonCheckBox, isVisible()),
        Check.whether(ContactDetailsPage.mainContactPersonSameAsContactPersonCheckBox, isClickable())
        .andIfSo(Click.on(ContactDetailsPage.mainContactPersonSameAsContactPersonCheckBox)),
        Check.whether(ContactDetailsPage.mainContactPersonMailingAddressCheckBox, isClickable())
        .andIfSo(Click.on(ContactDetailsPage.mainContactPersonMailingAddressCheckBox)),
));

When(/^(?:he|she|they) click to save his contact details$/, () =>
actorInTheSpotlight().attemptsTo(
        Check.whether(ContactDetailsPage.saveBtn, isClickable())
        .andIfSo(Click.on(ContactDetailsPage.saveBtn)),
));

Then(/^(?:he|she|they) should able to save his contact details$/, () =>
    actorInTheSpotlight().attemptsTo(
        Wait.until(NotificationPage.toastMessage, isVisible()),
));

When(/^(?:he|she|they) refresh the contact detail page$/, async () =>
actorInTheSpotlight().attemptsTo(
    Navigate.to(await protractor.browser.getCurrentUrl()),   
));

Then(/^(?:he|she|they) should see the page refreshed with the saved values name "(.*)" job title "(.*)" contact no "(.*)" email "(.*)" alternate email "(.*)" postal code "(.*)" blk "(.*)" street "(.*)" level "(.*)" unit "(.*)"/, (name: string, jobTitle: string, contactNo: string, email: string, alternateEmail: string, postalCode: string, blk: string, street: string, level: string, unit: string) =>
    actorInTheSpotlight().attemptsTo(
        Ensure.that(Value.of(ContactDetailsPage.mainContactPersonNameField),
        equals(name)),
        Ensure.that(Value.of(ContactDetailsPage.mainContactPersonJobTitleField),
        equals(jobTitle)),
        Ensure.that(Value.of(ContactDetailsPage.mainContactPersonContactNoField),
        equals(contactNo)),
        Ensure.that(Value.of(ContactDetailsPage.mainContactPersonEmailField),
        equals(email)),
        Ensure.that(Value.of(ContactDetailsPage.mainContactPersonAlternateEmailField),
        equals(alternateEmail)),
        Ensure.that(Value.of(ContactDetailsPage.mainContactPersonPostalCodeField),
            equals(postalCode)),
        Ensure.that(Value.of(ContactDetailsPage.mainContactPersonBlkHseNoField),
            equals(blk)),
        Ensure.that(Value.of(ContactDetailsPage.mainContactPersonStreetField),
        equals(street)),
        Ensure.that(Value.of(ContactDetailsPage.mainContactPersonLevelField),
        equals(level)),
        Ensure.that(Value.of(ContactDetailsPage.mainContactPersonUnitField),
        equals(unit)),
        Ensure.that(Value.of(ContactDetailsPage.letterOfOfferAddresseeNameField),
            equals(name)),
        Ensure.that(Value.of(ContactDetailsPage.letterOfOfferAddresseeDesignationField),
            equals(jobTitle)),
        Ensure.that(Value.of(ContactDetailsPage.letterOfOfferAddresseeEmailField),
        equals(email)),
));

// tslint:disable-next-line: max-line-length
When(/^(?:he|she|they) enter the contact details name "(.*)" job title "(.*)" contact no "(.*)" and the same email "(.*)" for both email and alternate email field$/, (name: string, jobTitle: string, contactNo: string, email: string) =>
actorInTheSpotlight().attemptsTo(
        Wait.until(ContactDetailsPage.mainContactPersonNameField, isVisible()),
        EnterMainContact.of(name, jobTitle, contactNo, email,email),
));

Then(/^(?:he|she|they) should see an alert message that the alternate email should be different from the primary email$/, () =>
    actorInTheSpotlight().attemptsTo(
        Wait.until(ContactDetailsPage.contactInfoSecondaryEmailAlert, isVisible()),
        Ensure.that(ContactDetailsPage.contactInfoSecondaryEmailAlert, isVisible()),
));
