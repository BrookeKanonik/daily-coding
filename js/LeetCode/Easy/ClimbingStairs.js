//Instructions:

/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 */

//Initial code (works):

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //need to add all previous values
    if (n === 1){
        return 1
    }else if (n === 2){
        return 2
    }else {
        let firstVal = 1
        let secondVal = 2
        for (let i=3; i<=n; i++){
            let temp = secondVal + firstVal
            firstVal = secondVal
            secondVal = temp
        }
        return secondVal;
    }
};

// O(n)

//Second attempt (same, but different loop start val)

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n===1){
        return 1
    }else if (n===2){
        return 2
    }else {
        let first = 1;
        let second = 2;
        for (let i =2; i<n; i++){
            let temp = second
            second = first + second
            first = temp
        }
        return second;
    }
};