import {
    toTitleCase,
    biggerThanLuke,
    sortBy,
    isSecure,
    detectTicTacToeWin
} from '../src/14-review/14-review.js';

const { test, skip } = QUnit;

QUnit.module('14 Review');

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code EXCEPT to change from "skip", to "test".

Run your tests from the browser using live-server, or console via: npm test

------------------------------------------------------------------------------------------------ */


test('It should convert each word to title case', assert => {
    const words = ['apple', 'banana', 'MacGyver'];
    assert.deepEqual(toTitleCase(words), ['Apple', 'Banana', 'MacGyver']);
    assert.deepEqual(toTitleCase([]), []);
});


const starWarsData = [{
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
},
{
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a'
},
{
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a'
},
{
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male'
},
{
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female'
},
{
    name: 'Pex Kylar',
    height: '180',
    mass: '190',
    hair_color: 'orange',
    skin_color: 'brown',
    eye_color: 'none',
    birth_year: '27BBY',
    gender: 'n/a'
}];

skip('It should return only characters that are bigger than Luke', assert => {
    assert.equal(biggerThanLuke(starWarsData), 'Darth Vader - Pex Kylar');
    assert.equal(biggerThanLuke([]), '');
});

skip('It should sort items by a price', assert => {

    assert.deepEqual(sortBy('price', [
        { name: 'Sweatshirt', price: 45 },
        { name: 'Bookmark', price: 2.50 },
        { name: 'Tote bag', price: 15 }
    ]), [
        { name: 'Bookmark', price: 2.50 },
        { name: 'Tote bag', price: 15 },
        { name: 'Sweatshirt', price: 45 },
    ]);

});

skip('It should sort items by name', assert => {

    assert.deepEqual(sortBy('name', [
        { name: 'Sweatshirt', price: 45 },
        { name: 'Bookmark', price: 2.50 },
        { name: 'Tote bag', price: 15 }
    ]), [
        { name: 'Bookmark', price: 2.50 },
        { name: 'Sweatshirt', price: 45 },
        { name: 'Tote bag', price: 15 },
    ]);
});

skip('It should check if url is https', assert => {
    assert.equal(isSecure('http://www.insecure.com'), false);
    assert.equal(isSecure('https://secure.com'), true);
    assert.equal(isSecure('https:/missingslash.org'), false);
});

skip('It should return true if there are three in a row', assert => {
    assert.equal(
        detectTicTacToeWin([['X', '', 'O'], ['X', 'O', ''], ['X', 'O', 'X']]), 
        true
    );
    assert.equal(
        detectTicTacToeWin([['O', '', 'X'], ['X', 'O', 'X'], ['X', '', 'O']]), 
        true
    );
});

skip('It should return false if there are not three in a row', assert => {
    assert.deepEqual(
        detectTicTacToeWin([['X', '', 'O'], ['O', 'O', ''], ['X', 'O', 'X']]), 
        false
    );
});

skip('It should not treat empty 3 in row as winner', assert => {
    assert.deepEqual(
        detectTicTacToeWin([['', '', ''], ['O', 'O', ''], ['X', 'O', 'X']]),
        false
    );
});
