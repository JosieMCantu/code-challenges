
/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-02.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should append without modifying the oiginal', () => {
    const a = 'This is my story.';
    const b = appendTheEnd(a);

    expect(a).toStrictEqual('This is my story.');
    expect(b).toStrictEqual('This is my story. The end.');
  });
});

describe('Testing challenge 2', () => {
  test('It should append by modifying the oiginal', () => {
    const a = ['Yes', 'it', 'is'];
    appendFirstToLast(a);

    expect(a).toStrictEqual(['Yes', 'it', 'is', 'Yes']);
  });
});

describe('Testing challenge 3', () => {
  test('It should add a property to an object', () => {
    const a = { fullName: 'Octavia Butler' };
    addBirthYearProperty(a, 1947);

    expect(a.yearBorn).toStrictEqual(1947);
  });
});

describe('Testing challenge 4', () => {
  test('It should add a property to every object in an array', () => {
    const a = [{ fullName: 'Octavia Butler' }, { fullName: 'Ray Bradbury' }, { fullName: 'Kurt Vonnegut' }];
    setStatusAsAuthor(a);

    expect(a[0].isAuthor).toStrictEqual(true);
    expect(a[1].isAuthor).toStrictEqual(true);
    expect(a[2].isAuthor).toStrictEqual(true);
  });
});

describe('Testing challenge 5', () => {
  test('It should append the second array to the first', () => {
    const a = [1, 2, 3, 4];
    const b = [5, 6, 7, 8];
    append(a, b);

    expect(a).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
