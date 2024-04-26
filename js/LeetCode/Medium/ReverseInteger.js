//  Instructions:

/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
*/

//Initial code (works):

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //take into account positive and negatives.
    //if positive we want to just do the code we have, if neg remove the negative
    let result;
    if (x >= 0){
        result = Number(x.toString().split('').reverse().join(''))
        return result <= (2)**31 -1 ? result : 0
    }else {
        //Slice to remove the negative in front
        result = -1 * Number(x.toString().slice(1).split('').reverse().join(''))
        return result >= (-2)**31 ? result : 0
    }
};