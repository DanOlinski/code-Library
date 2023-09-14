//-----------mocha and chai--------
{
  //moca and chai are node packages that work together(they were designed seperetaly but they are now used together) to test code
  //these packages have to be installed in the directory you have your files in
  //before installing these packages you need to create a .json file
  
  //run: npm init (this creates .json file)(npm init -y creates a default .json file without prompting you with info to be added)
  //npm install mocha@9.2.2 chai --save-dev (this installs mocha package with developer dependencies(--save-dev))
  //open your .json and in the 'test' key replace the entry with "./node_modules/mocha/bin/mocha" (there might be 2 'test' fields, the one you want to edit is under the Debug section)
  //inside your project folder create 2 folders: test and javascript (these folders hold the test files and the javascript files as comon practice)
  
  //inside test folder create a file for testing a function. inside the test file add the following code:
  /*
  const chai = require('chai') //you can compine this line and the line below with: const assert = require('chai).assert
  const expect = chai.expect //this line can also be written with chai.assert
  const validator = require('../javascript/fileToBeTested.js')
  describe("The function functionToBeTested()", () => {
  it("should return true if there are between 2 and 5 group members", () => {
      const array = ["a", "b", "c"]
      assert(validator.functionToBeTested(array)).to.be.true
    })
    // another way:
    // it("should return true if there are between 2 and 5 group members", (done) => {
    //   const array = ["a", "b", "c"]
    //   const testedFunction = functionToBeTested(array)
    //   assert.isTrue(testedFunction(array))
    //done()(use this only if you are testing async functions, done is also above as a argument of it callback)
    })
  })
  */ 
  
  //run: npm test or npx mocha(to execute mocha and test function)(you can also specify to test a single file: npm test test/test.js)
  
  /* the test above is testing the following function:
  exports.functionToBeTested = function(array) {
    if (array.length >= 6) {
      return false
    } else if (array.length <= 1) {
      return false
    } else {
      return true
    }
  }
  */
  
  //----chai---expect, assert, should
  //const chai = require('chai') //always do this first
  //const expect = chai.expect // you can use .expect or .arrest or .should
  //dependiong on what you chose your sinthax will have to change the content inside 'it' function(for assert: assert.isTrue(function()), for expect: assert(function()).to.be.true)
  //chose one of the three for your go to 
  // here is how to use each type: https://www.chaijs.com/
}

//---------Jest
{
  /*
  Folder structure
  when you have jest setup in a root folder you can have nested folders with specific names and jest will find and track them.
  root/src/components/__tests__/<any file in here>

  Jest will also find tests with any of the following extensions:
  js, jsx, ts, tsx, test, spec
  */
}