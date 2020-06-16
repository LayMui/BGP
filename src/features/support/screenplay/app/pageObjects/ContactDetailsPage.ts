import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class ContactDetailsPage {
     static mainContactPersonNameField = Target.the('Main Contact Person input').located(by.id('react-contact_info-name'));
     static mainContactPersonJobTitleField = Target.the('Main Contact Person Job Title input').located(by.id('react-contact_info-designation'));
     static mainContactPersonContactNoField = Target.the('Main Contact Person Contact No input').located(by.id('react-contact_info-phone'));
     static mainContactPersonEmailField = Target.the('Main Contact Person Email input').located(by.id('react-contact_info-primary_email'));
     static mainContactPersonAlternateEmailField = Target.the('Main Contact Person Alternate Email input').located(by.id('react-contact_info-secondary_email'));
     static mainContactPersonMailingAddressCheckBox = Target.the('Main Contact Person Mailing address same as registered address checkbox').located(by.id('react-contact_info-correspondence_address-copied'));
     static mainContactPersonPostalCodeField = Target.the('Main Contact Person Postal Code input').located(by.id('react-contact_info-correspondence_address-postal'));
     static mainContactPersonBlkHseNoField = Target.the('Main Contact Person Blk Hse No input').located(by.id('react-contact_info-correspondence_address-block'));
     static mainContactPersonStreetField = Target.the('Main Contact Person Street input').located(by.id('react-contact_info-correspondence_address-street'));
     static mainContactPersonLevelField = Target.the('Main Contact Person Level input').located(by.id('react-contact_info-correspondence_address-level'));
     static mainContactPersonUnitField = Target.the('Main Contact Person Unit input').located(by.id('react-contact_info-correspondence_address-unit'));
     static mainContactPersonBuildingNameField = Target.the('Main Contact Person Building Name input').located(by.id('react-contact_info-correspondence_address-building_name'));
     static mainContactPersonSameAsContactPersonCheckBox = Target.the('Main Contact Person Same as Contact Person checkbox').located(by.id('react-contact_info-copied'));
     static letterOfOfferAddresseeNameField = Target.the('Letter of Offer Addressee Name input').located(by.id('react-contact_info-offeree_name'));
     static letterOfOfferAddresseeDesignationField = Target.the('Letter of Offer Addressee Designation input').located(by.id('react-contact_info-offeree_designation'));
     static letterOfOfferAddresseeEmailField = Target.the('Letter of Offer Addressee Email input').located(by.id('react-contact_info-offeree_email'));
     static saveBtn = Target.the('Save Button').located(by.id('save-btn'));
     static backBtn = Target.the('Previous Button').located(by.id('back-btn'));
     static nextBtn = Target.the('Next Button').located(by.id('next-btn'));
     static contactInfoNameAlertMessage = Target.the('Contact info name alert message').located(by.id('react-contact_info-name-alert'));
     static contactInfoDesignationAlertMessage = Target.the('Contact info designation alert message').located(by.id('react-contact_info-designation-alert'));
     static contactInfoPhoneAlertMessage = Target.the('Contact info phone alert message').located(by.id('react-contact_info-phone-alert'));
     static contactInfoPrimaryEmailAlertMessage = Target.the('Contact info primary email alert message').located(by.id('react-contact_info-primary_email-alert'));
     static contactInfoAddressPostalAlertMessage = Target.the('Contact info address postal alert message').located(by.id('react-contact_info-correspondence_address-postal-alert'));
     static contactInfoOffereeNameAlertMessage = Target.the('Contact info offeree name alert message').located(by.id('react-contact_info-offeree_name-alert'));
     // tslint:disable-next-line: max-line-length
     static contactInfoOffereeDesignationAlertMessage = Target.the('Contact info offeree designation alert message').located(by.id('react-contact_info-offeree_designation-alert'));
     static contactInfoOffereeEmailAlertMessage = Target.the('Contact info offeree email alert message').located(by.id('react-contact_info-offeree_email-alert'));
     static sameAsRegisteredAddressText = Target.the('Same as registered address as company profile checkbox').located(by.cssContainingText('.bgp-checkboxlabel', 'Same as registered address in Company Profile'));
     static sameAsContactPersonText = Target.the('Same as contact person checkbox').located(by.cssContainingText('.bgp-checkboxlabel', 'Same as main contact person'));
     static contactInfoSecondaryEmailAlert = Target.the('Contact info secondary email alert').located(by.id('react-contact_info-secondary_email-alert'));
}