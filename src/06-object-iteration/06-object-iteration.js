/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named getCourseKeys that takes in the courseInfo object and returns an array containing the keys for the courseInfo object.

For example: (['name', 'duration', 'topics', 'finalExam']).
------------------------------------------------------------------------------------------------ */

export const getCourseKeys = (obj) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Use the characters data below for the remainder of the challenges.

Write a function named getHouses that returns a new array containing the names of all of the houses in the data set.
------------------------------------------------------------------------------------------------ */

export const getHouses = (arr) => {
    const houses = [];
    // Solution code here...
    return houses;
};

/*------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named hasChildrenValues that uses Object.values to determine if any given character in the data set has children.

This function should take in an array of data and a character name and return a Boolean.

For example:
hasChildrenValues(characters, 'Cersei') will return true
hasChildrenValues(characters, 'Sansa') will return false
------------------------------------------------------------------------------------------------ */

export const hasChildrenValues = (arr, character) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named hasChildrenEntries that is similar to your hasChildrenValues function from challenge 3, but uses the data's entries instead of its values.

The input and output of this function are the same as the input and output from challenge 3.
------------------------------------------------------------------------------------------------ */

export const hasChildrenEntries = (arr, character) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named totalCharacters that takes in an array and returns the number of characters in the array.
------------------------------------------------------------------------------------------------ */

export const totalCharacters = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function named houseSize that takes in the array of characters and creates an object for each house containing the name of the house and the number of members.

All of these objects should be added to an array named "sizes". Return the "sizes" array from the function.

For example: [{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, ... ].
------------------------------------------------------------------------------------------------ */

export const houseSize = (arr) => {
    const sizes = [];
    // Solution code here...
    return sizes;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

As fans are well aware, "When you play the game of thrones, you win or you die. There is no middle ground."

We will assume that Alerie Tyrell is deceased. She missed her daughter's wedding. Twice.

Write a function named houseSurvivors. You may modify your houseSize function from challenge 6 to use as the basis of this function.

This function should create an object for each house containing the name of the house and the number of members. If the spouse is deceased, do not include him/her in the total number of family members.

All of these objects should be added to an array named "survivors". Return the "survivors" array from the function.

For example: [ { house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, ... ].
------------------------------------------------------------------------------------------------ */

// authoritative list of deceased spouses
export const deceasedSpouses = ['Catelyn', 'Lysa', 'Robert', 'Khal Drogo', 'Alerie'];

export const houseSurvivors = (arr) => {
    const survivors = [];
    // Solution code here...
    return survivors;
};

