import {
    sortBackwards,
    alphabetize,
    sortByLength,
    alphabetizeBetter,
    sortByPrice,
    sortNumbersByLength,
    sortPeople,
    sortPeopleBetter,
    Person
} from '../src/03-sort/03-sort.js';

const { test, skip } = QUnit;

QUnit.module('03 Sort');

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code EXCEPT to change from "skip", to "test".

Run your tests from the browser using live-server, or console via: npm test

------------------------------------------------------------------------------------------------ */


test('It should sort high-to-low the numbers in an array', assert => {
    assert.deepEqual(sortBackwards([3, 4, 5, 6, 7]), [7, 6, 5, 4, 3]);
    assert.deepEqual(sortBackwards([3, 2, 1]), [3, 2, 1]);
    assert.deepEqual(sortBackwards([12, 20, 3]), [20, 12, 3]);
    assert.deepEqual(sortBackwards([]), []);
    assert.deepEqual(sortBackwards([1]), [1]);
});

skip('It should sort strings alphabetically', assert => {
    assert.deepEqual(alphabetize(['alphabet', 'Zebra', 'Alphabet', 'carrot']), ['Alphabet', 'Zebra', 'alphabet', 'carrot']);
    assert.deepEqual(alphabetize(['alphabet', 'Alphabet', 'carrot']), ['Alphabet', 'alphabet', 'carrot']);
    assert.deepEqual(alphabetize([]), []);
});

skip('It should sort strings by length', assert => {
    const ans = sortByLength(['alphabet', 'zebra', 'elephants', 'carrot']);
    assert.deepEqual(ans, ['zebra', 'carrot', 'alphabet', 'elephants']);
    assert.deepEqual(sortByLength(['a', 'bc', '']), ['', 'a', 'bc']);
    assert.deepEqual(sortByLength(['a']), ['a']);
    assert.deepEqual(sortByLength([]), []);
});

skip('It should alphabetize without regard to capitalization', assert => {
    const result = alphabetizeBetter(['Alice', 'apple', 'alert', 'Average']);
    assert.deepEqual(result, ['alert', 'Alice', 'apple', 'Average']);
    const result2 = alphabetizeBetter(['alphabet', 'Zebra', 'Alphabet', 'carrot']);
    assert.ok(result2[0] === 'Alphabet' || result2[0] === 'alphabet');
    assert.ok(result2[1] === 'Alphabet' || result2[1] === 'alphabet');
    assert.deepEqual(result2.slice(2), ['carrot', 'Zebra']);
});

skip('It should sort items by their price', assert => {
    assert.deepEqual(sortByPrice([
        { name: 'Sweatshirt', price: 45 },
        { name: 'Bookmark', price: 2.50 },
        { name: 'Tote bag', price: 15 }
    ]), [
        { name: 'Bookmark', price: 2.50 },
        { name: 'Tote bag', price: 15 },
        { name: 'Sweatshirt', price: 45 },
    ]);
    assert.deepEqual(sortByPrice([{ price: 12 }, { price: 10 }]), [{ price: 10 }, { price: 12 }]);
    assert.deepEqual(sortByPrice([]), []);
});

skip('It should sort numbers by their length', assert => {
    assert.deepEqual(sortNumbersByLength([10, 2.8, 1, -47.75]), [1, 10, 2.8, -47.75]);
    assert.deepEqual(sortNumbersByLength([100, 2.82, 1, -47.75]), [1, 100, 2.82, -47.75]);
    const sameLength = sortNumbersByLength([1, 2, 3]);
    assert.equal(sameLength [1, 2, 3]);
    assert.ok(sameLength.includes(1));
    assert.ok(sameLength.includes(2));
    assert.ok(sameLength.includes(3));
});

skip('It should sort people by their last names', assert => {

    const people = [
        new Person('Wes', 'Washington', 25),
        new Person('Casey', 'Carson', 38),
        new Person('Stan', 'Seattle', 67),
    ];

    assert.deepEqual(sortPeople(people), [
        new Person('Casey', 'Carson', 38),
        new Person('Stan', 'Seattle', 67),
        new Person('Wes', 'Washington', 25),
    ]);

    assert.deepEqual(
        sortPeople([{ lastName: 'banana' }, { lastName: 'apple' }]),
        [{ lastName: 'apple' }, { lastName: 'banana' }]
    );
});

skip('It should sort people with more strict ordering', assert => {

    const family = [
        new Person('Casey', 'Casems', 55),
        new Person('Casey', 'Casems', 37),
        new Person('Charlie', 'Casems', 21),
        new Person('Charles', 'Casems', 29),
        new Person('Carol', 'Casem', 88),
    ];
    
    assert.deepEqual(sortPeopleBetter(family), [
        new Person('Carol', 'Casem', 88),
        new Person('Casey', 'Casems', 37),
        new Person('Casey', 'Casems', 55),
        new Person('Charles', 'Casems', 29),
        new Person('Charlie', 'Casems', 21),
    ]);

    assert.deepEqual(
        sortPeopleBetter([
            { firstName: 'andrew', lastName: 'apple' }, 
            { firstName: 'andre', lastName: 'apple' }
        ]),
        [
            { firstName: 'andre', lastName: 'apple' }, 
            { firstName: 'andrew', lastName: 'apple' }
        ]
    );
});
