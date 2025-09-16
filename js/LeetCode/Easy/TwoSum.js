//Instructions:
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

//Initial code (works):

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let first = 0
    let last = nums.length -1
    while (first != last ){
        if (nums[first] + nums [last] === target){ //not the same element as in cannot do num[0] + num[0]
            return [first, last]
        }
        if (first === last -1){
            first = 0
            last -- 
        } else {
            first ++ 
        }
        }
};

//Redone code:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let storedValues = {};
    //store data into an object and see if there is an existing element that when added
    //gives you that value, if not then store that value
    for (let i=0; i<nums.length; i++){
        //subtract curr from target and see if that value is stored in the object
        let neededValue = target - nums[i] 
        if (storedValues[neededValue] !== undefined){
            return [storedValues[neededValue],i]
        }else{
            storedValues[nums[i]] = i 
        }
    }
};

//Code after coming back to it:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let storing = {}
    for (let i=0; i<nums.length; i++){ //go through list
        let currentNeeded = target - nums[i]
        if (storing[currentNeeded] !== undefined){
            return [storing[currentNeeded], i]
        }else{
            storing[nums[i]] = i
        }
    }
};

