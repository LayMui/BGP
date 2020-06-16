
import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class ReviewPage {
    static companyTitle                 = Target.the('Company title').located(by.xpath('//*[@id="company"]'));
    static eligibilityHeader             = Target.the('Eligibility header').located(by.xpath('//*[@id="eligibility"]/div[1]/div[1]/div/h2'));
    static contactInfoName              = Target.the('Contact info name readonly').located(by.id('react-contact_info-name'));
    static contactInfoDesignation       = Target.the('Contact info designation readonly').located(by.id('react-contact_info-designation'));
    static contactInfoPhone             = Target.the('Contact info phone readonly').located(by.id('react-contact_info-phone'));
    static contactInfoPrimaryEmail      = Target.the('Contact info primary email readonly').located(by.id('react-contact_info-primary_email'));
    static contactInfoSecondaryEmail    = Target.the('Contact info secondary email readonly').located(by.id('react-contact_info-secondary_email'));
    static contactInfoAddress           = Target.the('Contact info address readonly').located(by.id('react-contact_info-correspondence_address'));
    static contactInfoOffereeName       = Target.the('Contact info offeree name readonly').located(by.id('react-contact_info-offeree_name'));
    static contactInfoOffereeDesignation = Target.the('Contact info offeree designation readonly').located(by.id('react-contact_info-offeree_designation'));
    static contactInfoOffereeEmail      = Target.the('Contact info offeree email readonly').located(by.id('react-contact_info-offeree_email'));
    static projectTitle                 = Target.the('project title readonly').located(by.id('react-project-title'));
    static projectStartDate             = Target.the('project start date readonly').located(by.id('react-project-start_date'));
    static projectEndDate               = Target.the('project end date readonly').located(by.id('react-project-end_date'));
    static projectDuration              = Target.the('project duration readonly').located(by.id('react-project-project_duration_months'));
    static projectDescription           = Target.the('project description readonly').located(by.id('react-project-description'));
    static projectActivity              = Target.the('project activity readonly').located(by.id('react-project-activity'));
    static projectPrimaryMarket         = Target.the('project primary market readonly').located(by.id('react-project-primary_market'));
    static projectIsFirstTimeExpand     = Target.the('project is first time expand readonly').located(by.id('react-project-is_first_time_expand'));
    static projectImpactFyEndDate0      = Target.the('project impact FY end date 0 readonly').located(by.id('react-project_impact-fy_end_date_0'));
    static projectImpactFyEndDate1     = Target.the('project impact FY end date 1 readonly').located(by.id('react-project_impact-fy_end_date_1'));
    static projectImpactFyEndDate2      = Target.the('project impact FY end date 2 readonly').located(by.id('react-project_impact-fy_end_date_2'));
    static projectImpactFyEndDate3      = Target.the('project impact FY end date 3 readonly').located(by.id('react-project_impact-fy_end_date_3'));
    static projectImpactOverseasInvestments0 = Target.the('project impact overseas investments 0 readonly').located(by.id('react-project_impact-overseas_investments_0'));
    static projectImpactOverseasInvestments1 = Target.the('project impact overseas investments 1 readonly').located(by.id('react-project_impact-overseas_investments_1'));
    static projectImpactOverseasInvestments2 = Target.the('project impact overseas investments 2 readonly').located(by.id('react-project_impact-overseas_investments_2'));
    static projectImpactOverseasInvestments3 = Target.the('project impact overseas investments 3 readonly').located(by.id('react-project_impact-overseas_investments_3'));
    static projectImpactRationaleRemarks = Target.the('project impact rationale remarks readonly').located(by.id('react-project_impact-rationale_remarks'));
    static projectImpactBenefitsRemarks = Target.the('project impact benefits remarks readonly').located(by.id('react-project_impact-benefits_remark'));
    static projectCostVendorsLocalVendor = Target.the('project cost vendors local vendor readonly').located(by.id('react-project_cost-vendors-0-local_vendor'));
    static projectCostVendorsVendorName = Target.the('project cost vendors vendor name readonly').located(by.id('react-project_cost-vendors-0-vendor_name'));
    static declarationCriminalLiabilityCheck = Target.the('declaration criminal liability check readonly').located(by.id('react-declaration-criminal_liability_check'));
    static declarationCivilProceedingCheck = Target.the('declaration civil proceeding check readonly').located(by.id('react-declaration-civil_proceeding_check'));
    static declarationSolvencyProceedingCheck = Target.the('declaration solvency proceeding check readonly').located(by.id('react-declaration-insolvency_proceeding_check'));
    static declarationProjectIncentivesCheck = Target.the('declaration project incentives check readonly').located(by.id('react-declaration-project_incentives_check'));
    static declarationOtherIncentivesCheck = Target.the('declaration other incentives check readonly').located(by.id('react-declaration-other_incentives_check'));
    static declarationProjectCommerceCheck = Target.the('declaration project commence check readonly').located(by.id('react-declaration-project_commence_check'));
    static declarationRelatedPartyCheck = Target.the('declaration related party check readonly').located(by.id('react-declaration-related_party_check'));
    static declarationCovidSafeCheck = Target.the('declaration covid safe check readonly').located(by.id('react-declaration-covid_safe_check'));
    static declarationCovidSafeQuesCheck = Target.the('declaration covid safe question check readonly').located(by.id('react-declaration-covid_safe_ques_check'));
    static declarationConsentAckCheck = Target.the('declaration consent acknowledgement check readonly').located(by.id('react-declaration-consent_acknowledgement_check'));
    static declareTruthfulness   = Target.the('Declare Truthfulness checkbox').located(by.id('react-declaration-info_truthfulness_check'));
    static submit   = Target.the('submit button').located(by.id('submit-btn'));
}