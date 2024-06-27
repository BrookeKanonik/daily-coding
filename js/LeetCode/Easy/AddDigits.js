//Instructions:

/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0
 

Constraints:

0 <= num <= 231 - 1
 

Follow up: Could you do it without any loop/recursion in O(1) runtime?
*/

//Initial code (works):

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    //break down each number and add it
    let sum = 0
    for (let i=0; i<num.toString().length; i++){
        sum += Number(num.toString()[i])
    }
    if (sum <= 9){
        return sum
    }else{
        return addDigits(sum)
    }
};

//O(1) Solution:

var addDigits = function(num) {
    if (isNaN(num) || num === 0) return 0;
    if (num < 10) return num;
    return num % 9 === 0 ? 9 : num % 9;
};