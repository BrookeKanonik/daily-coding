//Instructions
/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

//Initial code (works):

const binaryArrayToNumber = arr => {
    let switched = arr.reverse() //do not need to set it to a variable
    console.log(switched)
    let total = 0
    for (let i=0; i < switched.length; i++){
      total += ((Math.pow(2,i)) * switched[i])
    }
    return total
  };

//Best practice:

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2); 