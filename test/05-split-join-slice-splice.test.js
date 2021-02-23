import {
    howMuchPencil,
    wordsToCharList,
    listFoods,
    splitFoods,
    stepActions,
    removeEvenValues,
    removeLastCharacters,
    totalSumCSV,
    removeVowels,
    extractVowels
} from '../src/05-split-join-slice-splice/05-split-join-slice-splice.js';

const { test, skip } = QUnit;

QUnit.module('05 split join slice splice');

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code EXCEPT to change from "skip", to "test".

Run your tests from the browser using live-server, or console via: npm test

------------------------------------------------------------------------------------------------ */

test('It should return a list of shortening words', assert => {
    assert.deepEqual(
        howMuchPencil('Welcome'), 
        ['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', '']
    );
    assert.deepEqual(howMuchPencil(''), ['']);
    assert.deepEqual(howMuchPencil('abc'), ['abc', 'bc', 'c', '']);
});

skip('It should return an array of individual letters', assert => {
    assert.deepEqual(wordsToCharList('Gregor'), ['G', 'r', 'e', 'g', 'o', 'r']);
    assert.deepEqual(wordsToCharList('hooray'), ['h', 'o', 'o', 'r', 'a', 'y']);
    assert.deepEqual(wordsToCharList(''), []);
});

const gruffaloCrumble = {
    name: 'How to make a Gruffalo Crumble',
    ingredients: [
        '1 medium-sized Gruffalo',
        '8 pounds oats',
        '2 pounds brown sugar',
        '4 pounds flour',
        '2 gallons pure maple syrup',
        '16 cups chopped nuts',
        '1 pound baking soda',
        '1 pound baking powder',
        '1 pound cinnamon',
        '6 gallons melted butter',
        '2 gallons fresh water',
    ],
    steps: [
        'Pre-heat a large oven to 375',
        'De-prickle the gruffalo',
        'Sprinkle with cinnamon, sugar, flour, and nuts',
        'Mix until evenly distributed',
        'Grease a 3-foot x 3-foot casserole dish',
        'Combine gruffalo compote with water to maintain moisture in the oven',
        'Fold together remaining ingredients to make the crisp',
        'Spread the crisp evenly over the gruffalo mixture',
        'Bake for 12-15 hours',
    ]
};

skip('It should return a list of foods', assert => {
    assert.deepEqual(
        listFoods(gruffaloCrumble), 
        ['Gruffalo', 'oats', 'brown sugar', 'flour', 'pure maple syrup', 'chopped nuts', 'baking soda', 'baking powder', 'cinnamon', 'melted butter', 'fresh water']
    );
});

skip('It should return a list of foods', assert => {
    assert.deepEqual(
        splitFoods(gruffaloCrumble),
        ['Gruffalo', 'oats', 'brown sugar', 'flour', 'pure maple syrup', 'chopped nuts', 'baking soda', 'baking powder', 'cinnamon', 'melted butter', 'fresh water']
    );
});

skip('It should return a list of recipe steps', assert => {
    assert.deepEqual(
        stepActions(gruffaloCrumble), 
        ['Pre-heat', 'De-prickle', 'Sprinkle', 'Mix', 'Grease', 'Combine', 'Fold', 'Spread', 'Bake']
    );
});

skip('It should remove the even numbers from the array', assert => {
    let list = [1, 2, 3, 4, 5, 6];
    removeEvenValues(list);
    assert.deepEqual(list, [1, 3, 5]);

    list = [6, 3, 19, 43, 12, 66, 43];
    removeEvenValues(list);
    assert.deepEqual(list, [3, 19, 43, 43]);
});


skip('It should shorten the string based on the first argument', assert => {
    assert.equal(removeLastCharacters('Gregor', 2), 'Greg');
});

skip('It should return the complete string when passed a negative number', assert => {
    assert.equal(removeLastCharacters('hello', -1), 'hello');
    assert.equal(removeLastCharacters('wowow', -700), 'wowow');
});

skip('It should return an empty string when called with a number larger than the string length', assert => {
    assert.equal(removeLastCharacters('hello', 12), '');
    assert.equal(removeLastCharacters('', 1), '');
    assert.equal(removeLastCharacters('a', 1), '');
});

skip('It should add up the numbers contained within the string', assert => {
    assert.equal(totalSumCSV('1,4,5,7,2'), 19);
    assert.equal(totalSumCSV('147'), 147);
});

skip('It should return the string without vowels', assert => {
    assert.equal(removeVowels('gregor'), 'grgr');
    assert.equal(removeVowels('asdf'), 'sdf');
    assert.equal(removeVowels('why'), 'why');
});

skip('It should return the string without vowels', assert => {
    assert.deepEqual(extractVowels('gregor'), ['grgr', 'eo']);
    assert.deepEqual(extractVowels('The quick brown fox'), ['Th qck brwn fx', 'eioou']);
});
