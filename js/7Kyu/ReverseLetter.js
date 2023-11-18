//Instructions

Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string

//Initial code (works):

function reverseLetter(str) { //input will be a string that can include some numbers
    //nothing funny here, will always be a string
    
      let newStr = ""
        console.log(str.length - 1)
    for (let i= str.length - 1; i >= 0 ; i--){ //going through the entire string
       if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122 ){
        newStr += str[i]
      
    }
    }
      return newStr //output should be the string reversed, but without containing anything non alphabetical
    }
    
//Other practices (may not be the best time wise):

reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');