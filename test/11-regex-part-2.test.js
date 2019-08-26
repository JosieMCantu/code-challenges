import {
    validatePin,
    validateEmail,
    validatePhoneNumber,
    findTagNames
} from '../src/11-regex-part-2/11-regex-part-2.js';

const { test, skip } = QUnit;

QUnit.module('11 Regex Part 2');

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code EXCEPT to change from "skip", to "test".

Run your tests from the browser using live-server, or console via: npm test

------------------------------------------------------------------------------------------------ */


test('It should validate a PIN of exactly four digits', assert => {
    assert.equal(validatePin(1234), true);
    assert.equal(validatePin(123), false);
    assert.equal(validatePin(12345), false);
    assert.equal(validatePin('abcd'), false);
    assert.equal(validatePin('7890'), true);
    assert.equal(validatePin('0789'), true);
    assert.equal(validatePin(789), false);
    assert.equal(validatePin('0000'), true);
});

skip('It should match a basic email', assert => {
    assert.equal(validateEmail('joe@company.com'), true);
});

skip('It should match if the email contains a period', assert => {
    assert.equal(validateEmail('joe.schmoe@company.net'), true);
});

skip('It should match if the email contains other top-level domains', assert => {
    assert.equal(validateEmail('joe@company.org'), true);
});

skip('It should match if the email contains a period and other top-level domains', assert => {
    assert.equal(validateEmail('joe.schmoe@company.net'), true);
});

skip('It should fail things that aren\'t email addresses', assert => {
    assert.equal(validateEmail('justastring'), false);
    assert.equal(validateEmail('missing@adomain'), false);
    assert.equal(validateEmail('@noname.com'), false);
    assert.equal(validateEmail('.@noname.com'), false);
    assert.equal(validateEmail('nolastname.@sadness.net'), false);
    assert.equal(validateEmail('canadaisnotreal@canada.ca'), false);
    assert.equal(validateEmail('missing.atsymbol.net'), false);
    assert.equal(validateEmail('looksgood@sofar.comohnowaitthisisbad'), false);
    assert.equal(validateEmail('no.middle.names@foryou.com'), false);
});

skip('It should match the acceptable phone number formats', assert => {
    assert.equal(validatePhoneNumber('(555) 555-5555'), true);
    assert.equal(validatePhoneNumber('555 555-5555'), true);
    assert.equal(validatePhoneNumber('555-555-5555'), true);
    assert.equal(validatePhoneNumber('555 5555555'), true);
    assert.equal(validatePhoneNumber('5555555555'), true);
    assert.equal(validatePhoneNumber('234 567 8910'), true);
});

skip('It should not match unacceptable phone number formats', assert => {
    assert.equal(validatePhoneNumber('abcdefghij'), false);
    assert.equal(validatePhoneNumber('222 222 2222 ext. 2222'), false);
    assert.equal(validatePhoneNumber('(222 222-2222'), false);
    assert.equal(validatePhoneNumber('222 222-2222-'), false);
    assert.equal(validatePhoneNumber('(222 222- 2222'), false);
    assert.equal(validatePhoneNumber('(222 222 -2222'), false);
    assert.equal(validatePhoneNumber('523 555--5555'), false);
    assert.equal(validatePhoneNumber('55555555555'), false);
    assert.equal(validatePhoneNumber('55555555555'), false);
    assert.equal(validatePhoneNumber('55555555555'), false);
    assert.equal(validatePhoneNumber('55_55_5555'), false);
});

skip('It should return the closing tags', assert => {
    assert.deepEqual(
        findTagNames(['<h1>Hello, world!</h1>', '<p>Welcome to my site</p>']),
        ['/h1', '/p']
    );
});

skip('It should work if there are multiple closing tags in a single string', assert => {
    assert.deepEqual(
        findTagNames(['<div><h1>Hello, world!</h1></div>', '<p>Welcome to my site</p>']),
        ['/h1', '/div', '/p']
    );
});
