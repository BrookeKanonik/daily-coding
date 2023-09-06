//Instructions:

/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

//Initial code (works):

function removeExclamationMarks(s) {
    return s.replaceAll('!', '');
  }

//Other solution:

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }