// Require different testing suites
var chai = require('chai');
var mocha = require('mocha');

// Testing content
var assert = chai.assert;

// Requiring items
var ninja = require('./index.js');

// Testing methods
describe('ninja', function() {

	//Test A
	it('We are able to access the internal feint count', function() {
		assert.equal(ninja.getFeints(), 1);
	});

	// Test B
	it('And the private data is inaccessible to us', function() {
		assert.equal(ninja.feints, undefined);
	});

});
