//Instructions:

/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

//Initial code (works):

function incrementString (strng) { //take in a string that either has a number or does not have one at the end
    //check if it ends with a number
    console.log(Number(strng[strng.length-1]))
    if (!(Number(strng[strng.length-1])>= 0 )){  //NaN is never equal to itself, so we need to check if it is never greater than or equal to zero  
      return strng + 1
    } else { //it ends in a number, but we need to work backwards to find where it begins
      let number = ''                  
      for (let i = strng.length - 1; strng.length > i ; i-- ){        
        if (Number(strng[i]) >= 0){
          number += strng[i]
        }else {
          let whereSplit = number.length * -1 
          number = (number.split('').reverse().join('')) //incriment the number
          return strng.slice(0, whereSplit) + (String(Number(number) + 1)).padStart(number.length, '0')
        }
      }
    }
  }
  //we want to return a string with a number at the end or an incremented number (if it already had one)
  //example apple --> apple 1 or chicken 222 --> chicken 223

//Best practices:

function incrementString(input) {
    if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
    return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
      var up = parseInt(p2) + 1;
      return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    });
  }
  

let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)