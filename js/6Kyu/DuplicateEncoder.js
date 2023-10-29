//Instructions:

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

//Initial code (works):

function duplicateEncode(word){ //taking in a string, spaces are also taking into account
    //lastindexof? need to make lowercase as well
  word = word.toLowerCase()
  return word.split('').map(element => //going to go through the whole word and determine if there is a duplicate or not
    word.indexOf(element) === word.lastIndexOf(element) ? '(' : ')'
).join('')
  //NEED TO REMEMBER, map is an ARRAY method and need to split and join. Need to also make it all toLowerCase first since S and s are the same
}
//returning a string with ( or ) based on if it is a repeating character
//example = "happy" --> "(())("

//Other way to write this:

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }