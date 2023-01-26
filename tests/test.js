const assert = require('chai').assert;
const app = require('../app');

//start with a describe function which encapsulates a section
describe('App', () => {
    
//inside of this describe there is an it function to test a particular feature
    it('App should return hello', () => {

        assert.equal(app(), 'hello')
    });


//second test to verify that the return type is a string
    it('has the return type of string', () => {

        assert.isString(app())
    });

});