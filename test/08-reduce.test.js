import {
    countNumberOfElements,
    eyeColorTally,
    eyeColorNames,
    countNumberOfChildren,
    calculateAverage,
    countPrimeNumbers,
    effortStats,
    extractChildren
} from '../src/08-reduce/08-reduce.js';

const { test, skip } = QUnit;

QUnit.module('08 Array reduce');

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code EXCEPT to change from "skip", to "test".

Run your tests from the browser using live-server, or console via: npm test

------------------------------------------------------------------------------------------------ */


test('It should return the length of the array', assert => {
    assert.equal(countNumberOfElements([1, 2, 3, 4, 5]), 5);
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

skip('It should return an object with eye color counts', assert => {
    assert.deepEqual(
        eyeColorTally(starWarsData), 
        { blue: 1, yellow: 2, red: 1, brown: 1 }
    );
});

skip('It should return an object with eye color names', assert => {
    assert.equal(
        eyeColorNames(starWarsData), 
        { 
            blue: ['Luke Skywalker'], 
            yellow: ['C-3PO', 'Darth Vader'], 
            red: ['R2-D2'], 
            brown: ['Leia Organa'] 
        }
    );
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

skip('It should return the total number of children', assert => {
    assert.equal(countNumberOfChildren(characters), 14);
});

skip('It should return the average of the numbers in the array', assert => {
    assert.equal(calculateAverage([18, 290, 37, 4, 55, 16, 7, 85]), 64);
});

skip('It should return a count of the prime numbers in the array', assert => {
    assert.equal(countPrimeNumbers([1, 2, 13, 64, 45, 56, 17, 8]), 3);
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

skip('It should return effort stats that match the input', assert => {
    assert.deepEqual(
        effortStats(snorlaxData.stats), 
        { min: 2, max: 9 }
    );
});

skip('It should return an array containing the names of the children', assert => {
    assert.deepEqual(
        extractChildren(characters), 
        ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Drogon', 'Rhaegal', 'Viserion', 'Margaery', 'Loras']
    );
});
