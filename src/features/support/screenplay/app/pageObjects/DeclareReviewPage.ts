import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class DeclareReviewPage {
     static yesRadioBtn1 = Target.the('Yes Radio Button 1').located(by.id('react-declaration-criminal_liability_check-true'));
     static noRadioBtn1 = Target.the('No Radio Button 1').located(by.id('react-declaration-criminal_liability_check-false'));
     static yesRadioBtn2 = Target.the('Yes Radio Button 2').located(by.id('react-declaration-civil_proceeding_check-true'));
     static noRadioBtn2 = Target.the('No Radio Button 2').located(by.id('react-declaration-civil_proceeding_check-false'));
     static yesRadioBtn3 = Target.the('Yes Radio Button 3').located(by.id('react-declaration-insolvency_proceeding_check-true'));
     static noRadioBtn3 = Target.the('No Radio Button 3').located(by.id('react-declaration-insolvency_proceeding_check-false'));
     static yesRadioBtn4 = Target.the('Yes Radio Button 4').located(by.id('react-declaration-project_incentives_check-true'));
     static noRadioBtn4 = Target.the('No Radio Button 4').located(by.id('react-declaration-project_incentives_check-false'));
     static yesRadioBtn5 = Target.the('Yes Radio Button 5').located(by.id('react-declaration-other_incentives_check-true'));
     static noRadioBtn5 = Target.the('No Radio Button 5').located(by.id('react-declaration-other_incentives_check-false'));
     static yesRadioBtn6 = Target.the('Yes Radio Button 6').located(by.id('react-declaration-project_commence_check-true'));
     static noRadioBtn6 = Target.the('No Radio Button 6').located(by.id('react-declaration-project_commence_check-false'));
     static yesRadioBtn7 = Target.the('Yes Radio Button 7').located(by.id('react-declaration-related_party_check-true'));
     static noRadioBtn7 = Target.the('No Radio Button 7').located(by.id('react-declaration-related_party_check-false'));
     static yesRadioBtn8 = Target.the('Yes Radio Button 8').located(by.id('react-declaration-covid_safe_check-true'));
     static noRadioBtn8 = Target.the('No Radio Button 8').located(by.id('react-declaration-covid_safe_check-false'));
     static yesRadioBtn9 = Target.the('Yes Radio Button 9').located(by.id('react-declaration-covid_safe_ques_check-true'));
     static noRadioBtn9 = Target.the('No Radio Button 9').located(by.id('react-declaration-covid_safe_ques_check-false'));
     static acknowlegementCheckBox = Target.the('Acknowledgement CheckBox').located(by.id('react-declaration-consent_acknowledgement_check'));
     static saveBtn = Target.the('Save Button').located(by.id('save-btn'));
     static reviewBtn = Target.the('Review Button').located(by.id('review-btn'));
     static backBtn = Target.the('Previous Button').located(by.id('back-btn'));

     static radioButtonSet1AlertMessage = Target.the('Check Declaration alert message for radio button 1').located(by.id('react-declaration-criminal_liability_check-alert'));
     static radioButtonSet2AlertMessage = Target.the('Check Declaration alert message for radio button 2').located(by.id('react-declaration-civil_proceeding_check-alert'));
     static radioButtonSet3AlertMessage = Target.the('Check Declaration alert message for radio button 3').located(by.id('react-declaration-insolvency_proceeding_check-alert'));
     static radioButtonSet4AlertMessage = Target.the('Check Declaration alert message for radio button 4').located(by.id('react-declaration-project_incentives_check-alert'));
     static radioButtonSet5AlertMessage = Target.the('Check Declaration alert message for radio button 5').located(by.id('react-declaration-other_incentives_check-alert'));
     static radioButtonSet6AlertMessage = Target.the('Check Declaration alert message for radio button 6').located(by.id('react-declaration-project_commence_check-alert'));
     static radioButtonSet7AlertMessage = Target.the('Check Declaration alert message for radio button 7').located(by.id('react-declaration-related_party_check-alert'));
     static radioButtonSet8AlertMessage = Target.the('Check Declaration alert message for radio button 8').located(by.id('react-declaration-covid_safe_check-alert'));
     static radioButtonSet9AlertMessage = Target.the('Check Declaration alert message for radio button 9').located(by.id('react-declaration-covid_safe_ques_check-alert'));
}