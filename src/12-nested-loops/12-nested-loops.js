/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

You friend Pat has a chain of stores around the greater Seattle area. He specializes in selling salmon cookies. Pat has data for the hourly sales of cookies per hour for each store. He wants to create an array of the total number of cookies sold per hour for all of his stores combined.

Write a function named grandTotal that adds up the cookies sales for each hour of operation for all of the stores combined. For example, the first element in the hourlySales array should be the sum of the cookies sold in the 9:00 a.m. hour at all five stores combined.

For this example, the total at 9:00 a.m. is 17 + 26 + 7 + 5 + 33, or 88 total cookies.

Return the array of the total number of cookies sold per hour for all of the stores combined.
------------------------------------------------------------------------------------------------ */

export const grandTotal = (stores) => {
  // Solution code here...

};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Pat has decided that he would also like to organize his data as objects containing the number of cookies sold per hour and the time.

Here is sample data for the 9:00 sales: { sales: '88 cookies', time: '9 a.m.' }.

Write a function named salesData that uses forEach to iterate over the hourlySales array and create an object for each hour. Return an array of the formatted data.
------------------------------------------------------------------------------------------------ */

export const salesData = (hours, data) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named howManyTreats that will return the quantity of treats you need to pick up from the pet store today from this array.
------------------------------------------------------------------------------------------------ */

export const howManyTreats = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named battleship that accepts a 2D array and two numbers: a row coordinate and a column coordinate.

Return "hit" or "miss" depending on if there's part of a boat at that position in the array. Assume the array has only one of two values at each index. '#' for part of a boat, or ' ' for open water.

Here is a sample board:
[
  ['#', ' ', '#', ' '],
  ['#', ' ', '#', ' '],
  ['#', ' ', ' ', ' '],
  [' ', ' ', '#', '#'],
]

The top row of the board is considered row zero and row numbers increase as they go down.
------------------------------------------------------------------------------------------------ */

export const battleship = (board, row, col) => {
  //  Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named calculateProduct that takes in a two-dimensional array of numbers, multiplies all of the numbers in each array, and returns the final product. This function should work for any number of inner arrays.

For example, the following input returns a product of 720: [[1,2], [3,4], [5,6]]
------------------------------------------------------------------------------------------------ */

export const calculateProduct = (numbers) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named averageDailyTemperature that accepts a two-dimensional array representing average daily temperatures grouped week-by-week.

Calculate the average daily temperature during that entire period. Your output should be a single number. Write your function so it could accept an array with any number of weeks given to it.
------------------------------------------------------------------------------------------------ */

export const averageDailyTemperature = (weather) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7

Write a function named lowestWeeklyAverage that accepts a two-dimensional array of daily temperatures grouped week-by-week.

Calculate the average temperature for each week and return the value of the lowest weekly average temperature.

For example, in the data set below, the lowest weekly average is 46, which is the average of the temperatures in week 2. All other weeks have average temperatures that are greater than 46.
------------------------------------------------------------------------------------------------ */

export const lowestWeeklyAverage = (weather) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8

Write a function called excel that accepts a string representing rows and columns in a table.

Rows are separated by newline "\n" characters. Columns are separated by commas. For example, '1,1,1\n4,4,4\n9,9,9' represents a 3x3 table.

The function should parse the string as rows and columns and compute the sum of the values for each row. Return an array with the sum of the values in each row.

For example, excel('1,1,1\n4,4,4\n9,9,9') returns [3, 12, 27].
------------------------------------------------------------------------------------------------ */

export const excel = (str) => {
  // Solution code here...
};
