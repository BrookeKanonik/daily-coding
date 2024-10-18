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

//Additional code/ optimization note

/**
 * @param {number} x
 * @return {boolean}
 */

//take in an integer that can be negative or positive
//-9, 101, 22, 7
function isPalindrome(num){
    //'-9'
    num = num.toString()
    //create a new var
    let reverseNum = ''
    for (let i=num.length-1; i >= 0; i--){
        reverseNum += num[i]
    }
    return num === reverseNum
}

//reverse the number and return T/F if it is the same as the original. -22 would not be because that would be -22 != 22- 

//optimization could be a two pointer approach with a while loop 
function isPalindrome(num){
    num=num.toString()
    let left = 0
    let right = num.length - 1
    while(right >= left ){
        if (num[left] !== num[right]){
            return false;
        }
        left ++;
        right --;
    }
    return true;
}

//Other shot at this (neater to read and look at, otherwise looping through with two pointers is the way to go):

/**
 * @param {number} x
 * @return {boolean}
 */


function isPalindrome(num){
    num = num.toString()
    return num.split('').reverse().join('') === num
}

