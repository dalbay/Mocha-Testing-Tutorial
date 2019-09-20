
/**********************************************************/
/* Test Example 1 */
/*
Create a test group named Math
Create two tests within the group Math.
Test one: Should test if 3*3 = 9
Test two: Should test if (3–4)*8 = -8
*/

// Require the built in 'assertion' library
var assert = require('assert');
// Create a test suite (group) called Math
describe('Math', function () {
    // Test One: A string explanation of what we're testing
    it('should equal to 9', function () {
        // Our actual test: 3*3 SHOULD EQUAL 9
        assert.equal(9, 3 * 3);
    });
    // Test Two: A string explanation of what we're testing
    it('should equal to -8', function () {
        // Our actual test: (3-4)*8 SHOULD EQUAL -8
        assert.equal(-8, (3 - 4) * 8);
    });
});


/**********************************************************/
/* Test Example 2 */
// Require the built in 'assertion' library
var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});


/**********************************************************/
/* Test Example 3 */
/*
app.js file is a Reference Class that we want to test.
test.js file is where we pass the class to. Here we have the data and test methods
*/

// test data
var myInventory = {
    water: 100,
    soda: 100
};

// Require the app.js file
let convert = require('../app.js');
// Require the built in 'assertion' library
let assert = require('assert');

// test app.js functions
describe('Check Element Existance',function(){
    describe('checkElement',function(){
        it('Should pass if the element exists.',function(){
            assert.equal('soda 100',convert.checkElement(myInventory,'soda').toString());
        });
    });
});
