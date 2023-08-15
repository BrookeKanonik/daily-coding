//Instructions:

/*



You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

* @param {array} numbers - list of numbers of n size which is odd
* @ return {number} odd number - returns the number that is the odd one out 
*/


//Initial code (works):

//parameter: array of size n (odd) where one is not like the others

function stray(numbers) {
    numbers.sort() // does not need to be reassigned 
    return numbers[0]===numbers[1] ? numbers[numbers.length-1] : numbers[0]
  }
  
  //return the odd number out
  //example: [5,5,6,5] => return the number 6

//Best practices:

function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
 }

const stray = nums => nums.reduce((a, b) => a ^ b);