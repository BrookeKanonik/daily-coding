//Instructions:

/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

//Initial code (works but needs to be modified to be faster):

function isPalindrome(x) { //we are taking in a number and seeing if it is the same number read forward and backward ex_ 121 --> 121 backwards as well
    let original = String(x) //the number as a string
    let newOne = String(x).split('').reverse().join('') //reversing the numbers
    return newOne === original
    }

//Updated:

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x === Number(x.toString().split('').reverse().join(''))
};