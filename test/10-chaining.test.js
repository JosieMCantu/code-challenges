import {
    count,
    totalSum,
    divisibleByFiveTwoToThePower,
    findTallerThan,
    findShortestName
} from '../src/10-chaining/10-chaining.js';

const { test, skip } = QUnit;

QUnit.module('10 Array Method Chaining');

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code EXCEPT to change from "skip", to "test".

Run your tests from the browser using live-server, or console via: npm test

------------------------------------------------------------------------------------------------ */


test('It should return the number of times the input is in the nested arrays', assert => {
    assert.equal(count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]), 4);
    assert.equal(count(3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]), 2);
    assert.equal(count(12, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]), 0);
});

skip('It should work on empty arrays', assert => {
    assert.equal(count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []]), 4);
    assert.equal(count(5, []), 0);
});

skip('It should add all the numbers in the arrays', assert => {
    const arraysOfNumbers = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6]];
    assert.equal(totalSum(arraysOfNumbers), 66);
});

skip('It should return numbers divisible by five, then raise two to the power of the resulting numbers', assert => {
    assert.deepEqual(
        divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]]), 
        [[1024, 1048576, 32], [32], [1024]]
    );
});

skip('It should return an empty array if none of the numbers are divisible by five', assert => {
    assert.deepEqual(
        divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10, 15]]), 
        [[], [32, 1024, 32768]]
    );
});

skip('It should return an empty array if the values are not numbers', assert => {
    assert.deepEqual(
        divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10', '15'], [5]]), 
        [[], [], [32]]
    );
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
}];

skip('It should return only characters that are taller than specified value', assert => {
    assert.equal(
        findTallerThan(165, starWarsData), 
        'Luke Skywalker and C-3PO and Darth Vader'
    );
    assert.deepEqual(
        findTallerThan(100, [
            { name: 'person', height: 110 }, 
            { name: 'lol', height: -100 }, 
            { name: 'persontwo', height: 125 }
        ]), 
        'person and persontwo'
    );
});

skip('It should return the name of the shortest character', assert => {
    assert.deepEqual(findShortestName(starWarsData), 'R2-D2');
});
