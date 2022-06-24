/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function that appends ' The end.' to a string, and returns the modified string. The original source string should not be modified.

------------------------------------------------------------------------------------------------ */

export const appendTheEnd = (str) => {
    return `${str} The end.`;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function that accepts an array and copies the first element to the end of the array. The change should be reflected in the source array that was passed in to the function. That is, the function should modify the array 'in place'.

Do not use a return statement.

For example:
const a = [1, 2, 3];
appendFirstToLast(a);
console.log(a) prints [1, 2, 3, 1]
------------------------------------------------------------------------------------------------ */

export const appendFirstToLast = (arr) => {
    arr.push(arr[0]);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function that accepts an object and an integer as arguments and adds a new property to the object called yearBorn. The value of the yearBorn property should be the integer that was passed in.

The change should be reflected in the source object that was passed in to the function. That is, the function should modify the object 'in place'.

Do not use a return statement.

For example:
const octavia = { fullName: 'Octavia Estelle Butler' };
addBirthYearProperty(octavia, 1947);
console.log(a) prints { fullName: 'Octavia Estelle Butler', yearBorn: 1947 }
------------------------------------------------------------------------------------------------ */

export const addBirthYearProperty = (obj, year) => {
    obj.yearBorn = year;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function that accepts an array of people objects and adds a new property called isAuthor to each object in the list. Set the value of the new property to true.

The function should modify the object in place. Do not use a return statement.

For example:
const people = [{ fullName: 'Octavia Butler' }, { fullName: 'Ray Bradbury' }];
setStatusAsAuthor(people);
console.log(people[1].isAuthor) prints true
------------------------------------------------------------------------------------------------ */

export const setStatusAsAuthor = (people) => {
    people.map((i) => i.isAuthor = true);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function that accepts two arrays. Append the values from the second array into the first,
maintaining the ordering.

The function should modify the first array in place. Do not use a return statement.

For example:
const a = [1, 2]; NOTE: If you assign an array to a `const`, you can't re-assign it later, but you can change the values in the array.
const b = [3, 4];
append(a, b);
console.log(a) prints [1, 2, 3, 4]
------------------------------------------------------------------------------------------------ */

export const append = (arr1, arr2) => {
  // Solution code here...
};
