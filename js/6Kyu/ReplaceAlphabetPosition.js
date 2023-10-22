//Instruction:

/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
*/

//Initial code (works):

function alphabetPosition(text) { //take in a string and convert the letters to a number, if a text isnt a letter, ignore it
    //charCodeAt for A begins at 65. 
    let returnString = '' //adding all codes to this string if it is a letter 
    let startValue = 64 //if A charCode is 65, we need this to be 64 so that A = 1
    text = text.toUpperCase()//.filter(element => element.charCodeAt() >= 65 && element.charCodeAt() <= 90){ //makes everything capitalized and will determine if it is A-Z
    for (let i = 0; i <text.length; i++){ //loop through capitalized string
      if (text[i].charCodeAt() >= 65 && text[i].charCodeAt() <= 90){
        returnString += text[i].charCodeAt() - 64 + ' ' //then return the code plus a space
      }
    }
    return returnString.trim() //or just slice to remove the last empty space 
      
  }
  
  //Best practice (very similar):

  function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++){
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length-1);
  }