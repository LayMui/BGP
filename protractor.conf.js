const
    { ConsoleReporter } = require('@serenity-js/console-reporter'),
    { ArtifactArchiver } = require('@serenity-js/core'),
    { Photographer, TakePhotosOfInteractions } = require('@serenity-js/protractor'),
    { SerenityBDDReporter } = require('@serenity-js/serenity-bdd'),
    isCI = require('is-ci');

exports.config = {
    baseUrl: 'https://public:Let$BeC001@bgp-qa.gds-gov.tech',

    chromeDriver: require(`chromedriver/lib/chromedriver`).path,

    //geckoDriver: require(`geckodriver/lib/geckodriver`).path,

    SELENIUM_PROMISE_MANAGER: false,

    directConnect: true,

    // https://github.com/angular/protractor/blob/master/docs/timeouts.md
    allScriptsTimeout: 110000,

    framework:      'custom',
    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),

    specs: [ 'src/features/**/*.feature' ],

    serenity: {
        runner: 'cucumber',
        crew: [
            ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
            ConsoleReporter.forDarkTerminals(),
            Photographer.whoWill(TakePhotosOfInteractions),     // or Photographer.whoWill(TakePhotosOfFailures),
            new SerenityBDDReporter(),
        ]
    },

    /**
     * If you're interacting with a non-Angular application,
     * uncomment the below onPrepare section,
     * which disables Angular-specific test synchronisation.
     */
     onPrepare: function() {
         browser.waitForAngularEnabled(false);
     },

    cucumberOpts: {
        require: [ 'src/features/**/*.ts', ],
        'require-module':   [ 'ts-node/register'],
        tags:    ['@us1ac1 or @us1ac2 or @us1ac3'],
        tags:    ['@us1ac4'],
        //tags:    ['@us2ac1'], 
        //tags:    ['@us2ac2'], 
        //tags:    ['@us2ac3'], 
        //tags:    ['@us2ac4'],
        //tags:    ['@us2ac5'], 
        //tags:    ['@us2ac6'],
        //tags:    ['@us2ac7'],
        //tags:    ['@us3ac1'],
        //tags:    ['@us3ac2'],
        //tags:    ['@us3ac3'],
        //tags:    ['@us3ac4'],
        strict:  false,
        format: ["pretty"], 
    },

    capabilities: {
        browserName: 'chrome',
     //   browserName: 'firefox',
        // see https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities#loggingpreferences-json-object
        loggingPrefs: {
            browser: 'SEVERE' // "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
        },

        chromeOptions: {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--disable-dev-shm-usage',
                '--disable-extensions',
                '--log-level=3',
                '--disable-gpu',
                '--window-size=1920,1080',
                '--incognito',
            ].concat(isCI ? ['--headless'] : [])    // run in headless mode on the CI server
        }
    }
};
