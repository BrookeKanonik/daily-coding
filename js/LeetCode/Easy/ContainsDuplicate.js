//Instructions:

/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

//Initial code (works):

/** 
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //nums is our parameters which contains an array of integers
    //we want to store this information in a hash map
    // [1,2,3,4] => F [1,1,2] => T
    let seenBefore = {}

    for (let i=0; i<nums.length; i++){
        if (seenBefore[nums[i]] !== undefined){ //seen this number before
            return true
        }else{
            seenBefore[nums[i]] = nums[i]
            // 1 : 1 
        }
    }
    return false 
    //return a boolean T/F. T = we have seen a number at least once. F = all distinct 
};

//can also make this a set 

function containsDuplicate(nums){
    const seenBefore = new Set()

    for (let i = 0; i < nums.length; i++){
        if (seenBefore.has(nums[i])){
            return true
        }else{
            seenBefore.add(nums[i])
        }
    }
    return false 
}


//sort and compare previous answer should be 0(nlogn) ? .sort() is n log n at worst NOT SURE ON THIS ONE 

function containsDuplicate(nums){
    let organized = nums.sort((a,b) => a-b)
    for (let i=1; i < organized.length; i++){
        if (organized[i] === organized[i-1]){
            return true
        }
    }
    return false
}