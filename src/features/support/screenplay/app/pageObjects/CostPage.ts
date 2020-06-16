import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class CostPage {
    static thirdPartyVendors             = Target.the('third party vendors toggle collapse').located(by.id('react-project_cost-vendors-accordion-header'));
    static thirdPartyVendorsAddNewItems  = Target.the('third party vendors add new items button').located(by.id('react-project_cost-vendors-add-item'));
  //  static officeSpaceRental             = Target.the('office space rental toggle collapse').located(by.id('react-project_cost-office_rentals-accordion-header'));
    static officeSpaceRental  = Target.the('office space rental toggle collapse').located(by.xpath('//*[@id="react-project_cost-office_rentals-accordion-header"]'));
    static officeSpaceRentalAddNewItems  = Target.the('office space rental add new items button').located(by.id('react-project_cost-office_rentals-add-item'));
    static officeSpaceRentalDescription0 = Target.the('office rental space description').located(by.id('react-project_cost-office_rentals-0-description'));
    static officeSpaceRentalDuration0 = Target.the('office rental space duration').located(by.xpath('//*[@id="react-project_cost-office_rentals-0-rental_duration"]'));
    static officeSpaceRentalAmount0 = Target.the('office rental space amount').located(by.id('react-project_cost-office_rentals-0-amount_in_billing_currency')); 
    static salary                        = Target.the('salary toggle collapse').located(by.id('react-project_cost-salaries-accordion-header'));
    static salaryAddNewItems  = Target.the('salary add new items button').located(by.id('react-project_cost-salaries-add-item'));
    static remarks            = Target.the('remarks textarea').located(by.id('react-project_cost-remarks'));
    static saveBtn            = Target.the('Save Button').located(by.id('save-btn'));
    static backBtn            = Target.the('Previous Button').located(by.id('back-btn'));
    static nextBtn            = Target.the('Next Button').located(by.id('next-btn'));
    static alertMessage       = Target.the('Alert Message').located(by.cssContainingText('.text-semibold.danger-helptext', 'Enter at least one cost item'));
}
