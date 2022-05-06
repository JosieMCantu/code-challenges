import {
    grandTotal,
    salesData,
    howManyTreats,
    battleship,
    calculateProduct,
    averageDailyTemperature,
    lowestWeeklyAverage,
    excel
} from '../src/12-nested-loops/12-nested-loops.js';

const { test, skip } = QUnit;

QUnit.module('12 Nested Loops');

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code EXCEPT to change from "skip", to "test".

Run your tests from the browser using live-server, or console via: npm test

------------------------------------------------------------------------------------------------ */

const hoursOpen = ['9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];

const firstPike = [17, 18, 23, 24, 24, 12, 13, 27, 30, 20, 24, 18];
const seaTac = [26, 5, 5, 59, 23, 39, 38, 20, 30, 7, 59, 43];
const seattleCenter = [7, 14, 19, 22, 15, 4, 23, 27, 28, 23, 1, 29];
const capHill = [5, 85, 58, 51, 50, 13, 33, 32, 47, 94, 31, 62];
const alkiBeach = [33, 31, 147, 130, 27, 93, 38, 126, 141, 63, 46, 17];

const cookieStores = [firstPike, seaTac, seattleCenter, capHill, alkiBeach];

test('It should add the hourly totals array', assert => {
    assert.deepEqual(
        grandTotal(cookieStores), 
        [88, 153, 252, 286, 139, 161, 145, 232, 276, 207, 161, 169]
    );
});

skip('It should create an object of data for each store', assert => {
    assert.deepEqual(
        salesData(hoursOpen, grandTotal(cookieStores)), 
        [
            { sales: '88 cookies', time: '9 a.m.' },
            { sales: '153 cookies', time: '10 a.m.' },
            { sales: '252 cookies', time: '11 a.m.' },
            { sales: '286 cookies', time: '12 p.m.' },
            { sales: '139 cookies', time: '1 p.m.' },
            { sales: '161 cookies', time: '2 p.m.' },
            { sales: '145 cookies', time: '3 p.m.' },
            { sales: '232 cookies', time: '4 p.m.' },
            { sales: '276 cookies', time: '5 p.m.' },
            { sales: '207 cookies', time: '6 p.m.' },
            { sales: '161 cookies', time: '7 p.m.' },
            { sales: '169 cookies', time: '8 p.m.' }
        ]
    );
});

const errands = [
    {
        store: 'Grocery store',
        items: [{ name: 'Eggs', quantity: 12 }, { name: 'Milk', quantity: 1 }, { name: 'Apples', quantity: 3 }]
    },
    {
        store: 'Drug store',
        items: [{ name: 'Toothpaste', quantity: 1 }, { name: 'Toothbrush', quantity: 3 }, { name: 'Mouthwash', quantity: 1 }]
    },
    {
        store: 'Pet store',
        items: [{ name: 'Cans of food', quantity: 8 }, { name: 'Treats', quantity: 24 }, { name: 'Leash', quantity: 1 }]
    }
];

skip('It should return the number 24', assert => {
    assert.equal(howManyTreats(errands), 24);
});

const battleshipData = [
    ['#', ' ', '#', ' '],
    ['#', ' ', '#', ' '],
    ['#', ' ', ' ', ' '],
    [' ', ' ', '#', '#'],
];

skip('It should return "hit" when it hits a boat', assert => {
    assert.equal(battleship(battleshipData, 0, 0), 'hit');
    assert.equal(battleship(battleshipData, 1, 0), 'hit');
});

skip('It should return "miss" when it doesn\'t hit a boat', assert => {
    assert.equal(battleship(battleshipData, 0, 1), 'miss');
    assert.equal(battleship(battleshipData, 3, 0), 'miss');
});

skip('It should multiply all the numbers together', assert => {
    assert.equal(calculateProduct([[1, 2], [3, 4], [5, 6]]), 720);
});

skip('It should return zero if there are any zeroes in the data', assert => {
    assert.equal(calculateProduct([[2, 3, 4, 6, 0], [4, 3, 7], [2, 4, 6]]), 0);
});

skip('It should work even if some of the arrays contain no numbers', assert => {
    assert.equal(calculateProduct([[1, 2], [], [3, 4, 5]]), 120);
});

const weeklyTemperatures = [
    [66, 64, 58, 65, 71, 57, 60],
    [57, 65, 65, 70, 72, 65, 51],
    [55, 54, 60, 53, 59, 57, 61],
    [65, 56, 55, 52, 55, 62, 57],
];

skip('It should calculate and return the average temperature of the data set', assert => {
    assert.equal(averageDailyTemperature(weeklyTemperatures), 60.25);
});

const lowestWeeklyTemperatureData = [
    [33, 64, 58, 65, 71, 57, 60],
    [40, 45, 33, 53, 44, 59, 48],
    [55, 54, 60, 53, 59, 57, 61],
    [65, 56, 55, 52, 55, 62, 57],
];

skip('It should return the lowest weekly average temperature within the data set', assert => {
    assert.equal(lowestWeeklyAverage(weeklyTemperatures), 57);
    assert.equal(lowestWeeklyAverage(lowestWeeklyTemperatureData), 46);
});

skip('It should return the total count for each row', assert => {
    const result = excel('1,1,1\n4,4,4\n9,9,9');
    assert.equal(result.length, 3);
    assert.equal(result[0], 3);
    assert.equal(result[1], 12);
    assert.equal(result[2], 27);
});
