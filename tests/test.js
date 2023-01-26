const assert = require('chai').assert;
const returnString = require('../app').returnString;
const multiply = require('../app').multiply;

//start with a describe function which encapsulates a section
describe('returnString', () => {
    
//inside of this describe there is an it function to test a particular feature
    it('App should return hello', () => {

        assert.equal(returnString(), 'hello')
    });


//second test to verify that the return type is a string
    it('has the return type of string', () => {

        assert.isString(returnString())
    });

});


describe('multiply', () => {
    it('multiplies to inputs and returns the result', () => {

        const randomNumber1 = Math.floor(Math.random() * 9);
        const randomNumber2 = Math.floor(Math.random() * 9);
        const randomsMultiplied = randomNumber1 * randomNumber2;
        assert.equal(randomsMultiplied, multiply(randomNumber1, randomNumber2))
    });
})