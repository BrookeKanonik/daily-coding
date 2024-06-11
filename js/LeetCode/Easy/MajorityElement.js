//Instructions:

/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

//Initial code (works):

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let amount = {}
    let currMax = 0
    let location = nums[0]

    for (let i=0; i<nums.length; i++){
        if (amount[nums[i]] !== undefined){
            amount[nums[i]] += 1
            if (amount[nums[i]] > currMax){
                currMax = amount[nums[i]]
                location = nums[i]
            }
        }else {
            amount[nums[i]] = 1
        }
    }
    return location
};

//0(1) Space solution:

var majorityElement = function(nums) {
    let count = 0;
    let candidate;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};

https://leetcode.com/problems/majority-element/solutions/5225828/boyer-moore-majority-vote-algorithm-o-1-space-o-n-time/