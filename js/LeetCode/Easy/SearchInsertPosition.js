//Instructions:

/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/

//Initial code (works and performs 70%+ better than most in memory and time):

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //remember it is a sorted array SO...
    if (target > nums[nums.length-1]){ //if target is bigger than last number return the length of array
        return nums.length
    }
    else if (target < nums[0]){
        return 0
    }
    else{ //else if it is somewhere in the array... 
        if (nums[Math.floor(nums.length/2)] > target ){
        for (let i =0; i < Math.floor(nums.length/2); i++){
            if (nums[i] === target){
                return i
            } else if (nums[i] < target && nums[i+1] > target){
                return i + 1 //taking into account if it is in between the numbers for the first half of the array
            }
        }
    } else {
        for (let j =Math.floor(nums.length/2); j < nums.length; j++){
            if (nums[j] === target){
                return j
            } else if (nums[j] < target && nums[j+1] > target){
                return j+1 //taking into account if it is in between the numbers for the later half of the array
            }
        }
    }
    } 
};

//Other solution (binary search):

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    function mergeSort(arr,target,left,right){
        if(left>right){
             return left
        }
        const mid=Math.floor((left+right)/2)
        if(arr[mid]==target) return mid
        else if(arr[mid]<target){
            return mergeSort(arr,target,mid+1,right)
        }else{
            return mergeSort(arr,target,left,mid-1)
        }
    }

    return mergeSort(nums,target,0,nums.length-1)
};