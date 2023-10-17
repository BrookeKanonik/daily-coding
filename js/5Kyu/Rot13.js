//Instructions:

/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

//Initial code (WORKS):

//for loop: we are running through each number once and determining if it is a letter or not, and if it is a letter determining if it is lowercase or not
//should be O(4n) 

function rot13(message){ //parameter takes in a message that is a string 
    //we want to go through each of the letters in the message
    let string = '' //instead of splitting and joining, this may be the quickest way
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let curr = 0
    for (let i=0; i < message.length; i++){
      curr = ''
      if (!lower.includes(message[i].toLowerCase())){ //need to check if this is a number or not, remember it came as a STRING
        string += message[i] //if it is not a letter, add what the character was to string        
      }else {
          curr = (lower.indexOf(message[i].toLowerCase()) + 13) % 26 //finding the index of it and dividing by how many letters there are in the alphabet
          string += message[i] === message[i].toLowerCase() ? lower[curr] : lower[curr].toUpperCase()
      }
    }
    return string
  }
  
  //letters from the latin/english alphabet should only be added
  //if the value is a number, then we do not return the special character.
  
  //example: "Test", "Grfg"


//Other solutions:

const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));

function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
  }