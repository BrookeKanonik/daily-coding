// Question:

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//Initial code (works):

const boolToWord = bool => bool ? 'Yes' : 'No'

//Best practice:

Above code or the following:

function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }