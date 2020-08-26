import {
    oddValues,
    filterStringsWithVowels,
    notInFirstArray,
    getBaseStatGreaterThan,
    getStatName,
    getCharactersWithoutChildren,
    evenOddNumericValues
} from '../src/07-filter/07-filter.js';

const { test, skip } = QUnit;

QUnit.module('07 Array filter');

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code EXCEPT to change from "skip", to "test".

Run your tests from the browser using live-server, or console via: npm test

------------------------------------------------------------------------------------------------ */


test('It should return an array containing only odd integers', assert => {
    assert.deepEqual(oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
    assert.deepEqual(oddValues([2, 3, 4, 179]), [3, 179]);
    assert.deepEqual(oddValues([2, 4, 6, 8]), []);
});

skip('It should return an array containing only words that have vowels', assert => {
    assert.deepEqual(
        filterStringsWithVowels(['gregor', 'hound', 'xyz']),
        ['gregor', 'hound']
    );
    assert.deepEqual(
        filterStringsWithVowels(['a', 'b', 'cdefg']),
        ['a', 'cdefg']
    );
    assert.deepEqual(
        filterStringsWithVowels(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '']),
        ['a', 'e', 'i', 'o', 'u']
    );
});

const firstNumbers = [1, 2, 3];
const secondNumbers = [1, 2, 3, 4];

const firstStrings = ['Demi', 'Gregor', 'Hound'];
const secondStrings = ['Gary', 'Charlotte', 'Demi', 'Gregor', 'Hound'];

skip('It should return an array that includes any elements not in the first array', assert => {
    assert.deepEqual(notInFirstArray(firstNumbers, secondNumbers), [4]);
});

skip('It should also work with an array of strings', assert => {
    assert.deepEqual(notInFirstArray(firstStrings, secondStrings), ['Gary', 'Charlotte']);
});

skip('It should work with empty arrays', assert => {
    assert.deepEqual(notInFirstArray([], []), []);
    assert.deepEqual(notInFirstArray([], [1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
    assert.deepEqual(notInFirstArray([1, 2, 3, 4, 5], []), []);
});


const snorlaxData = {
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

skip('It should return an array containing the stats that are greater than the input', assert => {
    assert.deepEqual(
        getBaseStatGreaterThan(snorlaxData.stats, 75),
        [{ stat: { url: 'https://pokeapi.co/api/v2/stat/5/', name: 'special-defense' }, effort: 2, baseStat: 110 }]
    );
    assert.deepEqual(getBaseStatGreaterThan(snorlaxData.stats, 110), []);
});

skip('It should work for non-Snorlax data', assert => {
    assert.deepEqual(
        getBaseStatGreaterThan([{ baseStat: 10 }, { baseStat: -85 }, { baseStat: 0 }, { baseStat: -50 }], -60),
        [{ baseStat: 10 }, { baseStat: 0 }, { baseStat: -50 }]
    );
});

skip('It should return the name of the stats that exceed that maximum', assert => {
    assert.deepEqual(getStatName(snorlaxData.stats, 50), ['special-defense', 'special-attack']);
});

skip('It should return no matches', assert => {
    assert.deepEqual(getStatName(snorlaxData.stats, 120), []);
});

skip('It should work for non-snorlax data', assert => {
    assert.deepEqual(getStatName([
        { baseStat: 10, stat: { name: 'one' } },
        { baseStat: -85, stat: { name: 'two' } },
        { baseStat: 0, stat: { name: 'three' } },
        { baseStat: -50, stat: { name: 'four' } }
    ], -60), ['one', 'three', 'four']);
});


const characters = [
    {
        name: 'Eddard',
        spouse: 'Catelyn',
        children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
        house: 'Stark',
    },
    {
        name: 'Jon',
        spouse: 'Lysa',
        children: ['Robin'],
        house: 'Arryn',
    },
    {
        name: 'Cersei',
        spouse: 'Robert',
        children: ['Joffrey', 'Myrcella', 'Tommen'],
        house: 'Lannister',
    },
    {
        name: 'Daenarys',
        spouse: 'Khal Drogo',
        children: ['Drogon', 'Rhaegal', 'Viserion'],
        house: 'Targaryen',
    },
    {
        name: 'Mace',
        spouse: 'Alerie',
        children: ['Margaery', 'Loras'],
        house: 'Tyrell',
    },
    {
        name: 'Sansa',
        spouse: 'Tyrion',
        house: 'Stark',
    },
    {
        name: 'Jon',
        spouse: null,
        house: 'Snow',
    },
];

skip('It should return an array containing characters who do not have children', assert => {
    assert.deepEqual(
        getCharactersWithoutChildren(characters), 
        [
            { name: 'Sansa', spouse: 'Tyrion', house: 'Stark' }, 
            { name: 'Jon', spouse: null, house: 'Snow' }
        ]
    );
});

skip('It should remove non-integers and return "even" or "odd', assert => {
    assert.deepEqual(evenOddNumericValues(['Gregor', 2, 4, 1]), ['even', 'even', 'odd']);
    assert.deepEqual(evenOddNumericValues(['a', 'b', 'c']), []);
});

skip('It should not accept strings that look like numbers', assert => {
    assert.deepEqual(
        evenOddNumericValues(['1', 2, 3, '4', 5, '6']), 
        ['even', 'odd', 'odd']
    );
});
