var assert = require('assert'); //requiring built in node module called assert
describe('progress.js', function() { //puts it in a nice box called progress
	var progress = require('../js/progress').moveProgressBar; //grabs the module.export from progress.js and then which part of the exported object to grab
    it('should be a function', function() { //'it' is the mocha function that defines code as a test
    	//^^^then you describe what the name of the test is, then telling it what code the test is being done on

 	  assert.ok(typeof progress === "function");

      //assert.equal(1, 1); //NOW THE TEST CODE ITSELF

      //run with npm test
    });
});