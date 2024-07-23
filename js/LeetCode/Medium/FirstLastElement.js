//Instructions:

/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
*/

var searchRange = function(nums, target) {
    let start = -1
    let end = -1
    let low = 0
    let high = nums.length -1

    while(low <= high){ //moving both at once
    //binary search -> array
        if (nums[0] === target) start = 0
        let middle = Math.floor((low + high) / 2)
        if (nums[middle] === target && nums[middle-1] !== target){
            start = middle //found the left
            //need to recalibrate
            low = middle
               
        }
        if (nums[middle] === target && nums[middle+1] !== target){
            end = middle        
            high = middle
        }

        low ++
    }
     return start === -1 && end !== -1 ? [end, end] :
            start !== -1 && end === -1 ? [start,start] :
            [start,end]
};

console.log(searchRange([5,7,7,8,8,10],8))