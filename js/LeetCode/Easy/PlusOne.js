//Instructions:

/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.
*/

//Initial code (works):

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length-1] = digits[digits.length-1] + 1
    let res = []
        for (let i = digits.length-1; i >= 0; i--){
            if (digits[i] === 10){ //if there is a 10
                 if(i===0){
                    res.unshift(0)
                    res.unshift(1)
                 }else {
                    digits[i-1] = digits[i-1] +1
                    res.unshift(0)
                 }
            }else {
                res.unshift(digits[i])
            }
        }
        return res  
};

//Another solution (with linked credit):

var plusOne = function(digits) {
    let l = digits.length - 1;
    
    let rec = function(p) {
        if (digits[p] < 9) {
            digits[p] += 1;
            return digits;
        } else {
            digits[p] = 0;
            if (p === 0) {
                digits.unshift(1);
                return digits;
            }
            return rec(p - 1); 
        }
    };
    
    return rec(l);
};

https://leetcode.com/problems/plus-one/solutions/4895667/efficient-solution-for-incrementing-non-negative-integer-represented-as-array-of-digits/