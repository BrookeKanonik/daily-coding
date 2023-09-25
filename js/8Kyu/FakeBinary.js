//Instructions:
/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

//Initial code (works):
function fakeBin(x){
    return x.split('').map(element => {
     return element >= '5' ? '1' : '0'//need the return here for this to work due to curly braces
    }).join('')
  }

//Other variation:

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}