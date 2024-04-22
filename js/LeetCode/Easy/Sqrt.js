//Instructions:

/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1
*/

//Initial code (works):

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) { //8
    let currentRoot = 0
    while (true){ //we will break when needed
        if (currentRoot * currentRoot > x){
            currentRoot --;
            break;
        }
        if (currentRoot * currentRoot === x){
            break;
        }
        currentRoot ++;
    }
    return currentRoot.toFixed(0)
};

//Binary Search example:

//O(logn) and space is O(1)

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) { 
    if(x<2) return x
    let left=0,right=x/2 
    while(left<=right){
        const mid=Math.floor((left+right)/2) 
        if(mid*mid<=x && x<(mid+1)*(mid+1)){ 
            return mid
        }else if((mid*mid)>x){
            right=mid-1
        }else{
            left=mid+1
        }
    }
    return -1
};

//Reference: https://leetcode.com/problems/sqrtx/solutions/4431059/simple-solution-using-binary-search/