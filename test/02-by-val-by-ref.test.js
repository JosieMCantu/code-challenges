import { 
    appendTheEnd,
    appendFirstToLast,
    addBirthYearProperty,
    setStatusAsAuthor
} from '../src/02-by-val-by-ref.js';

const { test, skip } = QUnit;

QUnit.module('02 By Val / By Ref');

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code EXCEPT to change from "skip", to "test".

Run your tests from the browser using live-server, or console via: npm test

------------------------------------------------------------------------------------------------ */


test('It should append without modifying the original', (assert) => {
    const a = 'This is my story.';
    const b = appendTheEnd(a);

    assert.equal(a).toStrictEqual('This is my story.');
    assert.equal(b).toStrictEqual('This is my story. The end.');
});


skip('It should append by modifying the oiginal', (assert) => {
    const a = ['Yes', 'it', 'is'];
    appendFirstToLast(a);

    assert.equal(a).toStrictEqual(['Yes', 'it', 'is', 'Yes']);
});


skip('It should add a property to an object', (assert) => {
    const a = { fullName: 'Octavia Butler' };
    addBirthYearProperty(a, 1947);

    assert.equal(a.yearBorn).toStrictEqual(1947);
});


skip('It should add a property to every object in an array', (assert) => {
    const a = [{ fullName: 'Octavia Butler' }, { fullName: 'Ray Bradbury' }, { fullName: 'Kurt Vonnegut' }];
    setStatusAsAuthor(a);

    assert.equal(a[0].isAuthor).toStrictEqual(true);
    assert.equal(a[1].isAuthor).toStrictEqual(true);
    assert.equal(a[2].isAuthor).toStrictEqual(true);
});


skip('It should append the second array to the first', (assert) => {
    const a = [1, 2, 3, 4];
    const b = [5, 6, 7, 8];
    append(a, b);

    assert.equal(a).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
