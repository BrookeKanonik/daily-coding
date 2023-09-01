//Instructions:

/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

//Initial code (works):
function removeChar(str){
    return str.split('').slice(1,-1).join('')
   };
   
//Best practice (do not need to make it an array):

function removeChar(str) {
    return str.slice(1, -1);
  }