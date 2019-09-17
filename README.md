# Mocha-Testing-Tutorial
### Unit Testing in JavaScript with Mocha
Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.

- intall node.js  
- create a folder on your local machine
- open this folder in VS Code 
- open terminal -> npm install -g mocha
- create a project directory named test
- inside the test create a file.js file
- initialize the project -> npm init (this will create a package.json file)
- Your file structure should look like this:
  * myProjectFolder
    * node_modules
	* test
      * test.js
	  * package.json
- write a test inside your test.js
- run mocha -> npm test

#### Test Example 1.
*Here is a link for this example:* https://codeburst.io/how-to-test-javascript-with-mocha-the-basics-80132324752e
1. Create a test group named Math
2. Create two tests within the group Math.
3. Test one: Should test if 3*3 = 9
4. Test two: Should test if (3–4)*8 = -8
``` JavaScript
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
```
*Run the test => ```npm test```*
![testing result](./images/testResult.png)

https://codeburst.io/how-to-test-javascript-with-mocha-part-2-2d83fcb6101a

---

#### Test Example 2.

``` JavaScript

// Require the built in 'assertion' library
var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
```
*Run the test => ```npm test```*
![testing result](./images/testResult1.png)

---
#### Test Example 3. *Read external JavaScript file and test it inside test folder - Mocha*

- Expose the functions inside the file to Mocha. Our test.js file needs to interact with our app.js file.
*Here is one way to tackle this:*
- Create an empty object (let ...)
- add the the functions inside this object as methods of this object.
- at the end of app.js add the convert object using module.exports - (this tells JavaScript what object to return as a result of a required call. )
``` JavaScript
// app.js file is a Reference Class that we want to test.
// test.js file is where we pass the class to. Here we have the data and test methods

var myInventory = {
    water: 100,
    soda: 100
};
let convert = require('../app.js');
let assert = require('assert');


describe('Check Element Existance',function(){
    describe('checkElement',function(){
        it('Should pass if the element exists.',function(){
            assert.equal('soda 100',convert.checkElement(myInventory,'soda').toString());
        });
    });
});

```
![testing result](./images/testResult2.png)



- Expose the functions inside the file to Mocha. Our test.js file needs to interact with our app.js file.
*Here is one way to tackle this:*
- Create an empty object (This is the reference object that is going to be tested)
- create the object methods.
- at the end of app.js add this object to module.exports - (this tells JavaScript what object to return as a result of a required call. )

``` JavaScript
// create empty object 
let convert = {};

// make functions methods of the object.
convert.checkElement = function(obj, strKey){
    for(var key in obj){
        if(key === strKey)
        {
            return key + " " + obj[key] ;        
        }
    }
};

// add the object using module.exports
module.exports = convert;

```
- require the app.js file in test.js and change function names used in our tests to include the convert object. Here is the test.js code:
