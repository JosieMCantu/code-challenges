import {
    firstLetters,
    findHappiness,
    standardizePhoneNumbers,
    onlyOddChars,
    allHappy,
    findAnything,
    findEvery,
    unenrollBrook,
    sortByDay,
    characterByIndex
} from '../src/13-strings/13-strings.js';

const { test, skip } = QUnit;

QUnit.module('13 String Manipulation');

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code EXCEPT to change from "skip", to "test".

Run your tests from the browser using live-server, or console via: npm test

------------------------------------------------------------------------------------------------ */

test('It should return the first letter of each element of the array', assert => {
    const words = ['apple', 'banana', 'cantaloupe'];

    assert.deepEqual(firstLetters(words), ['a', 'b', 'c']);
    assert.deepEqual(firstLetters(['a', 'b', 'c', 'd']), ['a', 'b', 'c', 'd']);
    assert.deepEqual(firstLetters([]), []);
});

skip('It should return only the strings that contain smiley faces', assert => {
    const words = ['things', 'apple (:)', ':)banana', 'missing that thing', 'cant:)aloupe'];

    assert.deepEqual(findHappiness(words), ['apple (:)', ':)banana', 'cant:)aloupe']);
    assert.deepEqual(findHappiness([]), []);
    assert.deepEqual(findHappiness(['sadness']), []);
    assert.deepEqual(findHappiness([':) yay', ':( no', '', '', '', '']), [':) yay']);
});

skip('It should return a standardized set of phone numbers', assert => {
    const nums = ['(123) 456-7890', '(222) 222-2222'];

    assert.deepEqual(standardizePhoneNumbers(nums), ['1234567890', '2222222222']);
    assert.deepEqual(standardizePhoneNumbers([nums[0]]), ['1234567890']);
});

skip('It should only return the odd indexed characters from the string', assert => {
    assert.equal(onlyOddChars('0123456789'), '13579');
    assert.equal(onlyOddChars('abcd'), 'bd');
    assert.equal(onlyOddChars('a'), '');
    assert.equal(onlyOddChars(''), '');
});

skip('It should correctly assess whether all the strings are happy', assert => {
    const words = ['things', 'apple (:)', ':)banana', 'missing that thing', 'cant:)aloupe'];

    assert.equal(allHappy(words), false);
    assert.equal(allHappy(['apple (:)', ':)banana', 'cant:)aloupe']), true);
    assert.equal(allHappy([]), true);
});

skip('It should find all the strings that contain a given string', assert => {
    const words = ['things', 'apple (:)', ':)banana', 'missing that thing', 'cant:)aloupe'];

    assert.deepEqual(findAnything(words, ':)'), findHappiness(words));
    assert.deepEqual(findAnything(words, 'i'), ['things', 'missing that thing']);
});

skip('It should determine whether all the strings contain a given string', assert => {
    const words = ['things', 'apple pie (:)', ':)banana pie', 'missing that thing', 'cant:)aloupe is tasty'];

    assert.equal(findEvery(words, 'a'), false);
    assert.equal(findEvery(words, ''), true);
    assert.equal(findEvery(words, 'i'), true);
});

skip('It should remove Brook from all courses', assert => {
    const roster = [
        ['Michelle', 'Allie', 'Brook TESTING'],
        ['Brook Riggio', 'hey look it\'s Brook', 'Jennifer'],
        ['Nicholas', 'Sam', 'Scott', 'Vinicio']
    ];

    assert.deepEqual(unenrollBrook(roster), [
        ['Michelle', 'Allie'],
        ['Jennifer'],
        ['Nicholas', 'Sam', 'Scott', 'Vinicio']
    ]);

    assert.deepEqual(
        unenrollBrook([['Brook', 'person'], [], ['person', 'person', 'Brook']]), 
        [['person'], [], ['person', 'person']]
    );

    assert.deepEqual(unenrollBrook([]), []);
});

skip('It should sort events by the day on which they happen', assert => {
    const events = [
        'Dancing on Mondays and Tuesdays', 
        'Meet the inventors! Monday, August 7', 
        'in the club on a Tuesday', 
        'Thursday Night Code', 
        'Saturday Night Fever'
    ];
    
    const sortedEvents = sortByDay(events);
    
    assert.equal(sortedEvents[0].includes('Dancing on Mondays and Tuesdays'), true);
    assert.equal(sortedEvents[0].includes('Meet the inventors! Monday, August 7'), true);
    assert.equal(sortedEvents[1].includes('Dancing on Mondays and Tuesdays'), true);
    assert.equal(sortedEvents[1].includes('in the club on a Tuesday'), true);
    assert.deepEqual(sortedEvents[2], []);
    assert.deepEqual(sortedEvents[3], ['Thursday Night Code']);
    assert.deepEqual(sortedEvents[4], []);
    assert.deepEqual(sortedEvents[5], ['Saturday Night Fever']);
    assert.deepEqual(sortedEvents[6], []);

    const events2 = ['Tuesday', 'Monday', 'Wednesday and Thursday', 'Tuesday 2', 'Thursday'];
    
    const sortedEvents2 = sortByDay(events2);

    assert.deepEqual(sortedEvents2[0], ['Monday']);
    assert.equal(sortedEvents2[1].includes('Tuesday'), true);
    assert.equal(sortedEvents2[1].includes('Tuesday 2'), true);
    assert.deepEqual(sortedEvents2[2], ['Wednesday and Thursday']);
    assert.equal(sortedEvents2[3].includes('Wednesday and Thursday'), true);
    assert.equal(sortedEvents2[3].includes('Thursday'), true);
    assert.deepEqual(sortedEvents2[4], []);
    assert.deepEqual(sortedEvents2[5], []);
    assert.deepEqual(sortedEvents2[6], []);
});

skip('It should return the ith character of the ith string', assert => {
    const words = ['apple', 'banana', 'cantaloupe'];

    assert.deepEqual(characterByIndex(words), ['a', 'a', 'n']);
    assert.deepEqual(characterByIndex(['abc', 'def', 'ghi']), ['a', 'e', 'i']);
    assert.deepEqual(characterByIndex(['wow', 'wow', 'wow']), ['w', 'o', 'w']);
});
