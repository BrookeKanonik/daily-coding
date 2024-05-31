//Instructions:

/*
Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

 

Example 1:

Input: nums = [1,2,1,3,2,5]
Output: [3,5]
Explanation:  [5, 3] is also a valid answer.
Example 2:

Input: nums = [-1,0]
Output: [-1,0]
Example 3:

Input: nums = [0,1]
Output: [1,0]
 

Constraints:

2 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
Each integer in nums will appear twice, only two integers will appear once.
*/

//Initial code:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    //linear time maybe hashmap?
    let check = {}
    let res = [];
    for (let i = 0; i <nums.length; i++){
        if (check[nums[i]] !== undefined){
            delete check[nums[i]]
        }else{
            check[nums[i]] = 1
        }
    }
    console.log(check)
    for (let item in check){
        res.push(Number(item))
    }
    return res   
};

singleNumber([3,4,5,6,3,4])

//may be better if there were other conditions to have one object mapping everything and then doing the for in loop and checking values that are equal to one