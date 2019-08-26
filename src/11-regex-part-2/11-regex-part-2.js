/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named validatePin that uses a regular expression pattern to validate a PIN.

If the PIN is four numerical digits long, return true. Otherwise, return false.
------------------------------------------------------------------------------------------------ */

export const validatePin = (pin) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named validateEmail that takes in an email address and validates it based on several rules:
  - one word, or two words separated by a period, before the @ symbol
  - can contain numbers
  - can have any of the following top-level domains: .net, .com, or .org
  - no other special characters
  - no subdomains, ports, etc: must be of the form name@place.com, not name@sub.place.com:3000

Return either true or false.

Note: if you ever need to validate an email using a regex in practice, the Internet has the actual regex you should use. It's many many lines long.
------------------------------------------------------------------------------------------------ */

export const validateEmail = (email) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named validatePhoneNumber that accepts a phone number and determines if it is valid.

Acceptable formats include:
 - (555) 555-5555
 - (555)555 5555
 - 555 555-5555
 - 555-5555555
 - 555-555 5555
 - 555-555-5555
 - 555 555 5555
 - 555555-5555
 - 5555555555

Your function should include a single regular expression pattern that matches any of these formats.

Return either true or false.
------------------------------------------------------------------------------------------------ */

export const validatePhoneNumber = (phoneNumber) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4 - Stretch Goal

Write a function named findTagNames that iterates over (matches) an array of HTML strings and uses a regular expression pattern to return the closing tags.

For example, findTagNames(['<h1>Hello, world!</h1>', '<p>Welcome to my site</p>']) returns ['/h1', '/p'].
findTagNames(['<div><h1>Hello, world!</h1></div>', '<p>Welcome to my site</p>']) returns ['/h1', '/div', '/p'].
------------------------------------------------------------------------------------------------ */

export const findTagNames = elements => {
  // Solution code here...
};