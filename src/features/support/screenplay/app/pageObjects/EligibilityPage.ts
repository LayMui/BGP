import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class EligibilityPage {
     static yesRadioBtn1 = Target.the('Yes Radio Button 1').located(by.id('react-eligibility-sg_registered_check-true'));
     static noRadioBtn1 = Target.the('No Radio Button 1').located(by.id('react-eligibility-sg_registered_check-false'));
     static yesRadioBtn2 = Target.the('Yes Radio Button 2').located(by.id('react-eligibility-turnover_check-true'));
     static noRadioBtn2 = Target.the('No Radio Button 2').located(by.id('react-eligibility-turnover_check-false'));
     static yesRadioBtn3 = Target.the('Yes Radio Button 3').located(by.id('react-eligibility-global_hq_check-true'));
     static noRadioBtn3 = Target.the('No Radio Button 3').located(by.id('react-eligibility-global_hq_check-false'));
     static yesRadioBtn4 = Target.the('Yes Radio Button 4').located(by.id('react-eligibility-new_target_market_check-true'));
     static noRadioBtn4 = Target.the('No Radio Button 4').located(by.id('react-eligibility-new_target_market_check-false'));
     static yesRadioBtn5 = Target.the('Yes Radio Button 5').located(by.id('react-eligibility-started_project_check-true'));
     static noRadioBtn5 = Target.the('No Radio Button 5').located(by.id('react-eligibility-started_project_check-false'));
     static saveBtn = Target.the('Save Button').located(by.id('save-btn'));
     static nextBtn = Target.the('Next Button').located(by.id('next-btn'));
     static warningMessage = Target.the('Warning Message').located(by.css('div[class="eligibility-advice"]'));
     static FAQLink = Target.the('FAQ Link').located(by.css('a[href="https://www.ifaq.gov.sg/BGP/apps/fcd_faqmain.aspx#FAQ_1111145"]'))
     static radioButtonSet1AlertMessage = Target.the('Check Eligibility alert message for radio button 1').located(by.id('react-eligibility-sg_registered_check-alert'));
     static radioButtonSet2AlertMessage = Target.the('Check Eligibility alert message for radio button 2').located(by.id('react-eligibility-turnover_check-alert'));
     static radioButtonSet3AlertMessage = Target.the('Check Eligibility alert message for radio button 3').located(by.id('react-eligibility-global_hq_check-alert'));
     static radioButtonSet4AlertMessage = Target.the('Check Eligibility alert message for radio button 4').located(by.id('react-eligibility-new_target_market_check-alert'));
     static radioButtonSet5AlertMessage = Target.the('Check Eligibility alert message for radio button 5').located(by.id('react-eligibility-started_project_check-alert'));
}
