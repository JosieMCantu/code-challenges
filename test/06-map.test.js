import {
    forLoopTwoToThe,
    forEachTwoToThe,
    mapTwoToThe,
    charCode,
    evenOdd,
    extractAbilities,
    extractStats
} from '../src/06-map/06-map.js';

const { test, skip } = QUnit;

QUnit.module('06 Array map');

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code EXCEPT to change from "skip", to "test".

Run your tests from the browser using live-server, or console via: npm test

------------------------------------------------------------------------------------------------ */


test('It should return two raised to the power of the integer', assert => {
    assert.deepEqual(forLoopTwoToThe([0, 4, 5]), [1, 16, 32]);
});

skip('It should return decimals if the integer is negative', assert => {
    assert.deepEqual(forLoopTwoToThe([-1, -2, -3]), [0.5, 0.25, 0.125]);
});

skip('It should return two raised to the power of the integer', assert => {
    assert.deepEqual(forEachTwoToThe([0, 4, 5]), [1, 16, 32]);
});

skip('It should return decimals if the integer is negative', assert => {
    assert.deepEqual(forEachTwoToThe([-1, -2, -3]), [0.5, 0.25, 0.125]);
});

skip('It should return two raised to the power of the integer', assert => {
    assert.deepEqual(mapTwoToThe([0, 4, 5]), [1, 16, 32]);
});

skip('It should return decimals if the integer is negative', assert => {
    assert.deepEqual(mapTwoToThe([-1, -2, -3]), [0.5, 0.25, 0.125]);
});

skip('It should return an array containing the character code for each letter', assert => {
    assert.deepEqual(
        charCode(['C', 'o', 'd', 'e', '3', '0', '1']),
        [67, 111, 100, 101, 51, 48, 49]
    );
});

skip('It should return an array containing even or odd for each number', assert => {
    assert.deepEqual(
        evenOdd([5, 8, 2, 6, 9, 13, 542, 541]),
        ['odd', 'even', 'even', 'even', 'odd', 'odd', 'even', 'odd']
    );
});

skip('It should work with all odd numbers', assert => {
    assert.deepEqual(
        evenOdd([1, 3, 5, 7, 9]),
        ['odd', 'odd', 'odd', 'odd', 'odd']
    );
});

skip('It should work with all even numbers', assert => {
    assert.deepEqual(
        evenOdd([2, 4, 6, 8, 10]),
        ['even', 'even', 'even', 'even', 'even']
    );
});

skip('It should return the string "N/A" if a non-number is included in the array', assert => {
    assert.deepEqual(
        evenOdd([5, 8, 2, 'hi']), ['odd', 'even', 'even', 'N/A']);
});

const snorlaxAbilities = {
    abilities: [
        {
            slot: 3,
            is_hidden: true,
            ability: {
                url: 'https://pokeapi.co/api/v2/ability/82/',
                name: 'gluttony',
            },
        },
        {
            slot: 2,
            is_hidden: false,
            ability: {
                url: 'https://pokeapi.co/api/v2/ability/56/',
                name: 'cute charm',
            },
        },
        {
            slot: 1,
            is_hidden: false,
            ability: {
                url: 'https://pokeapi.co/api/v2/ability/17/',
                name: 'immunity',
            },
        },
    ],
    name: 'snorlax',
    weight: 4600,
};

skip('It should return an array containing only the ability names', assert => {
    assert.deepEqual(
        extractAbilities(snorlaxAbilities.abilities),
        ['gluttony', 'cute charm', 'immunity']
    );
});

const snorlaxStats = {
    stats: [
        {
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/6/',
                name: 'speed',
            },
            effort: 5,
            baseStat: 30,
        },
        {
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/5/',
                name: 'special-defense',
            },
            effort: 2,
            baseStat: 110,
        },
        {
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/4/',
                name: 'special-attack',
            },
            effort: 9,
            baseStat: 65,
        },
    ],
    name: 'snorlax',
    weight: 4600,
};

skip('It should return an array containing objects with name and total values', assert => {
    assert.deepEqual(
        extractStats(snorlaxStats.stats),
        [
            { name: 'speed', total: 35, },
            { name: 'special-defense', total: 112, },
            { name: 'special-attack', total: 74, },
        ]
    );
});
