const drivers = {
	chrome: { version: '79.0.3945.36'}, // https://chromedriver.chromium.org/
	firefox: { version: '0.27.0' } // https://github.com/mozilla/geckodriver/releases
}

exports.config = {

	//
	// ====================
	// Runner Configuration
	// ====================
	//
	// WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
	// on a remote machine).
	runner: 'local',
	// ==================
	// Specify Test Files
	// ==================
	//
	specs: [
		'./test/specs/portal/creditorwatch/**.js'
	],
	// Patterns to exclude.
	exclude: [],

	// define specific suites
	suites: {
		smoke: [
			'./test/specs/portal/creditorwatch/RiskManagementBlogs.js'
		]
	},
	
	// ============
	// Capabilities
	// ============

	maxInstances: 10,

	capabilities: [{
		browserName: 'firefox'
	}],
	
	// ===================
	// Test Configurations
	// ===================
	// Define all options that are relevant for the WebdriverIO instance here
	//
	// Level of logging verbosity: trace | debug | info | warn | error | silent
	logLevel: 'error',


	// bail (default is 0 - don't bail, run all tests).
	bail: 0,

	baseUrl: 'https://creditorwatch.com.au/',
	
	// Default timeout for all waitFor* commands.
	waitforTimeout: 60000,
	
	// Default timeout in milliseconds for request
	connectionRetryTimeout: 90000,
	
	// Default request retries count
	connectionRetryCount: 1,

	services: [['selenium-standalone', {
		logPath: 'logs',
		installArgs: { drivers }, 
		args: { 
			drivers,
			seleniumArgs: ['-host', '127.0.0.1','-port', '4444']
		}
	}]
	],

	framework: 'mocha',
	
	// The number of times to retry the entire specfile when it fails as a whole
	// specFileRetries: 1,
	
	// Delay in seconds between the spec file retry attempts
	// specFileRetriesDelay: 0,
	
	// Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
	// specFileRetriesDeferred: false,
	
	reporters: ['dot',
	  ['allure', {
			outputDir: 'allure-results',
			disableWebdriverStepsReporting: true,
			disableWebdriverScreenshotsReporting: false,
		}]
	],

    
	mochaOpts: {
		ui: 'bdd',
		timeout: 60000,
		require: ['@babel/register']
	},
	
	// =====
	// Hooks
	// =====

	/**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
	// onPrepare: function (config, capabilities) {
	// },
	/**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
	// onWorkerStart: function (cid, caps, specs, args, execArgv) {
	// },
	/**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
	// beforeSession: function (config, capabilities, specs) {
	// },
	/**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
	// before: function (capabilities, specs) {     
	// },
	/**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
	// beforeCommand: function (commandName, args) {
	// },
	/**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
	// beforeSuite: function (suite) {
	// },
	/**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
	beforeTest: function (test, context) {  
		browser.maximizeWindow();
		browser.setTimeout({ 'pageLoad': 90000 });
	},
	/**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
	// beforeHook: function (test, context) {
	// },
	/**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
	// afterHook: function (test, context, { error, result, duration, passed, retries }) {
	// },
	/**
     * Function to be executed after a test (in Mocha/Jasmine).
     */
	afterTest: function(test, context, { error, result, duration, passed, retries }) {
		if(error){
			browser.takeScreenshot();
		}
	},


	/**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
	// afterSuite: function (suite) {
	// },
	/**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
	// afterCommand: function (commandName, args, result, error) {
	// },
	/**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
	// after: function (result, capabilities, specs) {
	// },
	/**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
	// afterSession: function (config, capabilities, specs) {
	// },
	/**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
	// onComplete: function(exitCode, config, capabilities, results) {
	// },
	/**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
	//onReload: function(oldSessionId, newSessionId) {
	//}
};