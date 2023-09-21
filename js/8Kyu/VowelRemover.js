//Instructions:

/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

//Initial code (works):

function shortcut (string) {
    return string.replaceAll(/[aeiou]/g, "")
    //cannot return string here has to be above otherwise replaceAll did not work. needs g for global.
  }

//replace also works instead of replaceAll