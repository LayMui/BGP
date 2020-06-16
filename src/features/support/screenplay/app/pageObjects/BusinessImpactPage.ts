import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class BusinessImpactPage {
    static FYEndDate       = Target.the('FY end date field').located(by.id('react-project_impact-fy_end_date_0'));
    static overseasSales0   = Target.the('overseas sales 0 input').located(by.id('react-project_impact-overseas_sales_0'));
    static overseasSales1   = Target.the('overseas sales 1 input').located(by.id('react-project_impact-overseas_sales_1'));
    static overseasSales2   = Target.the('overseas sales 2 input').located(by.id('react-project_impact-overseas_sales_2'));
    static overseasSales3   = Target.the('overseas sales 3 input').located(by.id('react-project_impact-overseas_sales_3'));
    static overseasInvestments0   = Target.the('overseas investments 0 input').located(by.id('react-project_impact-overseas_investments_0'));
    static overseasInvestments1   = Target.the('overseas investments 1 input').located(by.id('react-project_impact-overseas_investments_1'));
    static overseasInvestments2   = Target.the('overseas investments 2 input').located(by.id('react-project_impact-overseas_investments_2'));
    static overseasInvestments3   = Target.the('overseas investments 3 input').located(by.id('react-project_impact-overseas_investments_3'));
    static rationaleForProjectionsRemarks  = Target.the('rationale for projections remarks textarea').located(by.id('react-project_impact-rationale_remarks'));
    static nonTangibleBenefitsRemarks  = Target.the('non tangible benefits remarks textarea').located(by.id('react-project_impact-benefits_remarks'));
    static saveBtn            = Target.the('Save Button').located(by.id('save-btn'));
    static backBtn            = Target.the('Previous Button').located(by.id('back-btn'));
    static nextBtn            = Target.the('Next Button').located(by.id('next-btn'));
    static fyEndDateAlertMessage = Target.the('FY End Date alert message').located(by.id('react-project_impact-fy_end_date_0-alert'));
    static overseasSales0AlertMessage = Target.the('Overseas Sales 0 alert message').located(by.id('react-project_impact-overseas_sales_0-alert'));
    static overseasSales1AlertMessage = Target.the('Overseas Sales 1 alert message').located(by.id('react-project_impact-overseas_sales_1-alert'));
    static overseasSales2AlertMessage = Target.the('Overseas Sales 2 alert message').located(by.id('react-project_impact-overseas_sales_2-alert'));
    static overseasSales3AlertMessage = Target.the('Overseas Sales 3 alert message').located(by.id('react-project_impact-overseas_sales_3-alert'));
    static overseasInvestments0AlertMessage = Target.the('Overseas Investments 0 alert message').located(by.id('react-project_impact-overseas_investments_0-alert'));
    static overseasInvestments1AlertMessage = Target.the('Overseas Investments 1 alert message').located(by.id('react-project_impact-overseas_investments_1-alert'));
    static overseasInvestments2AlertMessage = Target.the('Overseas Investments 2 alert message').located(by.id('react-project_impact-overseas_investments_2-alert'));
    static overseasInvestments3AlertMessage = Target.the('Overseas Investments 3 alert message').located(by.id('react-project_impact-overseas_investments_3-alert'));
    static rationaleRemarksAlertMessage = Target.the('Rationale remarks alert message').located(by.id('react-project_impact-rationale_remarks-alert'));
    static BenefitsRemarksAlertMessage = Target.the('Benefits remarks alert message').located(by.id('react-project_impact-benefits_remarks-alert'));
}
