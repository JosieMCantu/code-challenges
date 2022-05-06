import {
    getCourseKeys,
    getHouseNames,
    getHouseWords,
    getHouseSizes,
    getHouseHead,
    totalCharacters,
    getHouseWordsMapped,
    totalCharactersReduced,
} from '../src/09-object-iteration/09-object-iteration.js';

const { test, skip } = QUnit;

QUnit.module('09 Object Iteration');

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code EXCEPT to change from "skip", to "test".

Run your tests from the browser using live-server, or console via: npm test

------------------------------------------------------------------------------------------------ */


const courseInfo = {
    name: 'Bootcamp II', 
    duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks' },
    topics: ['CSS Grid', 'APIs', 'NodeJS', 'SQL', 'Components'],
    finalExam: true
};

test('It should return the keys from an object', assert => {
    assert.deepEqual(
        getCourseKeys(courseInfo), 
        ['name', 'duration', 'topics', 'finalExam']
    );
});

let houses = {
    Stark: {
        characters: ['Eddard', 'Catelyn', 'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Benjen', 'John'],
        words: 'Winter Is Coming',
        head: 'Sansa',
        region: 'North'
    },
    Tyrell: {
        characters: ['Mace', 'Alerie', 'Margaery', 'Loras', 'Olenna'],
        words: 'Growing Strong',
        head: 'none',
        region: 'The Reach'
    },
    Arryn: {
        characters: ['Jon', 'Lysa', 'Robin'],
        words: 'A High as Honor',
        head: 'Robin',
        region: 'The Vale of Arryn'
    },
    Lannister: {
        characters: ['Cersei', 'Tyrion', 'Jaime', 'Tywin', 'Lancel', 'Reginald', 'Joffrey', 'Myrcella', 'Tommen'],
        words: 'Hear Me Roar!',
        head: 'Tyrion',
        region: 'The Westerlands'
    },
    Baratheon: {
        characters: ['Robert', 'Stannis', 'Renly', 'Gendry'],
        words: 'Ours is the Fury',
        head: 'Gendry',
        region: 'The Stormlands'
    },
    Targaryen: {
        characters: ['Daenarys', 'Viserys', 'Aerys'],
        words: 'Fire and Blood',
        head: 'none',
        region: 'The Crownlands'
    },
    Greyjoy: {
        characters: ['Balon', 'Theon', 'Asha'],
        words: 'We Do Not Sow',
        head: 'Yara',
        region: 'Iron Islands'
    }
};

skip('It should return an array of the names of the houses', assert => {
    assert.deepEqual(
        getHouseNames(houses), 
        ['Stark', 'Tyrell', 'Arryn', 'Lannister', 'Baratheon', 'Targaryen', 'Greyjoy']
    );
});

skip('It should return an array of the words of all houses', assert => {
    assert.deepEqual(
        getHouseWords(houses), 
        [
            'Winter Is Coming',
            'Growing Strong',
            'A High as Honor',
            'Hear Me Roar!',
            'Ours is the Fury',
            'Fire and Blood',
            'We Do Not Sow'
        ]
    );
});

skip('It should return an array of the houses and number of characters', assert => {
    assert.deepEqual(
        getHouseSizes(houses), 
        [
            { house: 'Stark', members: 9 },
            { house: 'Tyrell', members: 5 },
            { house: 'Arryn', members: 3 },
            { house: 'Lannister', members: 9 },
            { house: 'Baratheon', members: 4 },
            { house: 'Targaryen', members: 3 },
            { house: 'Greyjoy', members: 3 }
        ]
    );
});

skip('It should return head for a house', assert => {
    assert.equal(
        getHouseHead(houses, 'Stark'),
        'Sansa'
    );

    assert.equal(
        getHouseHead(houses, 'Tyrell'),
        'none'
    );

    assert.equal(
        getHouseHead(houses, 'Greyjoy'),
        'Yara'
    );
});

skip('It should return the number of characters in all houses', assert => {
    assert.equal(totalCharacters(houses), 36);
});


skip('It should return an array of the words of all houses using map', assert => {
    assert.deepEqual(
        getHouseWordsMapped(houses), 
        [
            'Winter Is Coming',
            'Growing Strong',
            'A High as Honor',
            'Hear Me Roar!',
            'Ours is the Fury',
            'Fire and Blood',
            'We Do Not Sow'
        ]
    );
});


skip('It should return the number of characters in all houses using reduce', assert => {
    assert.equal(totalCharactersReduced(houses), 36);
});