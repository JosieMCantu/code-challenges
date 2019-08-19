import {
    getCourseKeys,
    getHouses,
    hasChildrenValues,
    hasChildrenEntries,
    totalCharacters,
    houseSize,
    houseSurvivors
} from '../src/06-object-iteration/06-object-iteration.js';

const { test, skip } = QUnit;

QUnit.module('06 Object Iteration');

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code EXCEPT to change from "skip", to "test".

Run your tests from the browser using live-server, or console via: npm test

------------------------------------------------------------------------------------------------ */


const courseInfo = {
    name: 'Bootcamp II', 
    duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks' },
    topics: ['SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming'],
    finalExam: true
};

test('It should return the keys from an object', assert => {
    assert.deepEqual(
        getCourseKeys(courseInfo), 
        ['name', 'duration', 'topics', 'finalExam']
    );
});

let characters = [
    {
        name: 'Eddard',
        spouse: 'Catelyn',
        children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
        house: 'Stark'
    },
    {
        name: 'Jon A.',
        spouse: 'Lysa',
        children: ['Robin'],
        house: 'Arryn'
    },
    {
        name: 'Cersei',
        spouse: 'Robert',
        children: ['Joffrey', 'Myrcella', 'Tommen'],
        house: 'Lannister'
    },
    {
        name: 'Daenarys',
        spouse: 'Khal Drogo',
        children: ['Drogon', 'Rhaegal', 'Viserion'],
        house: 'Targaryen'
    },
    {
        name: 'Mace',
        spouse: 'Alerie',
        children: ['Margaery', 'Loras'],
        house: 'Tyrell'
    },
    {
        name: 'Sansa',
        spouse: 'Tyrion',
        children: [],
        house: 'Stark'
    },
    {
        name: 'Jon S.',
        spouse: null,
        children: [],
        house: 'Snow'
    }
];



skip('It should return an array of the names of the houses', assert => {
    assert.deepEqual(
        getHouses(characters), 
        ['Stark', 'Arryn', 'Lannister', 'Targaryen', 'Tyrell', 'Stark', 'Snow']
    );
});


skip('It should return true for characters that have children', assert => {
    assert.ok(hasChildrenValues(characters, 'Daenarys'));
});

skip('It should return false to characters who do not have children', assert => {
    assert.notOk(hasChildrenValues(characters, 'Sansa'));
});


skip('It should return true for characters that have children', assert => {
    assert.ok(hasChildrenEntries(characters, 'Eddard'));
});

skip('It should return false to characters who do not have children', assert => {
    assert.notOk(hasChildrenEntries(characters, 'Jon S.'));
});


skip('It should return the number of characters in the array', assert => {
    assert.equal(totalCharacters(characters), 27);
});


skip('It should return an object for each house containing the name and size', assert => {
    assert.deepEqual(
        houseSize(characters), 
        [
            { house: 'Stark', members: 7 }, 
            { house: 'Arryn', members: 3 }, 
            { house: 'Lannister', members: 5 }, 
            { house: 'Targaryen', members: 5 }, 
            { house: 'Tyrell', members: 4 }, 
            { house: 'Stark', members: 2 }, 
            { house: 'Snow', members: 1 }
        ]
    );
});


skip('It should not include any deceased spouses', assert => {
    assert.deepEqual(
        houseSurvivors(characters), [
            { house: 'Stark', members: 6 }, 
            { house: 'Arryn', members: 2 }, 
            { house: 'Lannister', members: 4 }, 
            { house: 'Targaryen', members: 4 }, 
            { house: 'Tyrell', members: 3 }, 
            { house: 'Stark', members: 2 }, 
            { house: 'Snow', members: 1 }
        ]
    );
});
