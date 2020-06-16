import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class ProposalPage {
    static projectTitle       = Target.the('project title input').located(by.id('react-project-title'));
    static startDate          = Target.the('start date field').located(by.id('react-project-start_date'));
    static endDate            = Target.the('end date field').located(by.id('react-project-end_date'));
    static projectDuration    = Target.the('duration readonly').located(by.className('bgp-readonly'));
    static projectDescription = Target.the('project description textarea').located(by.id('react-project-description'));
    static activity                 = Target.the('activity select option').located(by.id('react-select-project-activity--value'));
    static inputComboBoxValueForActivity = Target.the('activity select item').located(by.xpath('//*[@id="react-select-project-activity--value"]/div[2]/input'));
    static inputComboBoxForActivity = Target.the('activity select item value').located(by.css('input[role="combobox"]'));
    static targetMarket             = Target.the('target market select option').located(by.id('react-select-project-primary_market--value'));
    // tslint:disable-next-line: max-line-length
    static inputComboBoxValueForTargetMarket = Target.the('target market select item value').located(by.xpath("//*[@id='react-select-project-primary_market--value']/div[2]/input"));
    static inputComboBoxForTargetMarket = Target.the('target market select item').located(by.xpath('//*[@id="react-select-project-primary_market--value"]'));
    static firstTimeExpandYes = Target.the('first time expand to target market radio button Yes').located(by.id('react-project-is_first_time_expand-true'));
    static firstTimeExpandNo  = Target.the('first time expand to target market radio button No').located(by.id('react-project-is_first_time_expand-false'));
    static selectFiles        = Target.the('select files to attach').located(by.id('react-project-attachments-btn'));
    static remarks            = Target.the('remarks textarea').located(by.id('react-project-remarks'));
    static saveBtn            = Target.the('Save Button').located(by.id('save-btn'));
    static backBtn            = Target.the('Previous Button').located(by.id('back-btn'));
    static nextBtn            = Target.the('Next Button').located(by.id('next-btn'));
    static projectTitleAlertMessage = Target.the('Project title alert message').located(by.id('react-project-title-alert'));
    static projectStartDateAlertMessage = Target.the('Project start date alert message').located(by.id('react-project-start_date-alert'));
    static projectEndDateAlertMessage = Target.the('Project end date alert message').located(by.id('react-project-start_date-alert'));
    static projectDescriptionAlertMessage = Target.the('Project description alert message').located(by.id('react-project-description-alert'));
    static projectActivityAlertMessage = Target.the('Project activity alert message').located(by.id('react-project-activity-alert'));
    static projectPrimaryMarketAlertMessage = Target.the('Project primary market alert message').located(by.id('react-project-primary_market-alert'));
    static projectIsFirstTimeExpandAlertMessage = Target.the('Project is first time expand alert message').located(by.id('react-project-is_first_time_expand-alert'));
}
