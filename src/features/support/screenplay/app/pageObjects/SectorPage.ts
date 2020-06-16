import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

// To read: https://medium.com/@donatas.uznys/robust-locator-strategy-custom-attributes-for-test-automation-5527ae0483d7
// Naming convention: https://stackoverflow.com/questions/45028747/suggested-naming-conventions-for-selenium-identifiers
// Issue: ID locator name with spaces: https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute
export class SectorPage {
    static foodNBeverges = Target.the('Food & Beverages picker option').located(by.id('Food & Beverages'));
    static landscape = Target.the('Landscape picker option').located(by.id('Landscape'));
    static maritime = Target.the('Maritime picker option').located(by.id('Maritime'));
    static retail = Target.the('Retail picker option').located(by.id('Retail'));
    static tourism = Target.the('Tourism picker option').located(by.id('Tourism'));
    static buildingNConstruction = Target.the('Building & Constructor picker option').located(by.id('Building & Constructor'));
    static financialServices = Target.the('Financial Services picker option').located(by.id('Financial Services'));
    //static IT = Target.the('IT picker option').located(by.id('IT'));
    static IT = Target.the('IT picker option').located(by.xpath('//*[@id="IT"]'));
    static manufacturingNEngineering = Target.the('Manufacturing & Engineering picker option').located(by.id('Manufacturing & Engineering'));
    static professionalServices = Target.the('Professional Services picker option').located(by.id('Professional Services'));
    static services = Target.the('Services picker option').located(by.id('Services'));
    static others = Target.the('Others picker option').located(by.id('Others'));
    static airTransport = Target.the('Air Transport picker option').located(by.id('Air Transport'));
    static environmentServices = Target.the('Environment Services picker option').located(by.id('Environment Services'));
    static healthcare = Target.the('Healthcare picker option').located(by.id('Healthcare'));
    static logistics = Target.the('Logistics picker option').located(by.id('Logistics'));
    static media = Target.the('Media picker option').located(by.id('Media'));
    static security = Target.the('Security picker option').located(by.id('Security'));
    static wholeSaleTrade = Target.the('Wholesale Trade picker option').located(by.id('Wholesale Trade'));
}
