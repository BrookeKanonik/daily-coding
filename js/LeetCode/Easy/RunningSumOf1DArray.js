//Instructions:

/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
 
Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
*/

//Initial code:

//Parameters: an array of integers
//Results: an array of integers of the same length, but with the running sum 
//Example:
//Input: nums = [1,1,1,1,1]
//Output: [1,2,3,4,5]


//My initial code: 
const runningSum = nums => {
       let running = []
       let total = 0
       for (let i = 0; i < nums.length; i++) {
             total += nums[i]
             running.push(total)
       }
       return running
}

//Other example with better memory:

const runningSum = nums => {
    nums.reduce((previousVal, currentVal, currentInd, arr) => arr[currentInd] += previousVal)
    return nums 
}

//Memory is better but runtime is worse 