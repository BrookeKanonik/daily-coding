//Instructions:

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/

//Initial code (works):

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let list = new Map()
    // let oneNum = {}//dont define as it can mess with results
    for (let i=0;  i<nums.length; i++){
        if ( list.get(nums[i])){
            list.set(nums[i], 2)
            //cannot create variable and do value ++ for set. something did not work. need to rememeber the instructions and that only one is listed once while everything else is listed twice.
            // delete oneNum[nums[i]]
        } else {
            list.set(nums[i], 1)
            // oneNum.push(nums[i]) //addinmg values with 1 
            // oneNum[nums[i]] = 1
        }
    }

    for (let [key, value] of list.entries()) {
    if (value === 1)
      return key;
  }
};

//was planning to this with objects as well instead of just maps (see commented lines on approach that was going to be taken)

//NOTE EXTREMELY SLOW WHEN RAN. NEED FASTER SOLUTION:

var singleNumber = function(nums) {
    // Initialize the unique number...
    let uniqNum = 0;
    // TRaverse all elements through the loop...
    for (let idx = 0; idx < nums.length; idx++) {
        // Concept of XOR...
        uniqNum = uniqNum ^ nums[idx];
    } return uniqNum;       // Return the unique number...
};

//REMEMBER BITWISE XOR (^) EXAMPLE: 2 ^ 2 ^ 6 = 6 SINCE 2 ^ 2 CANCEL OUT