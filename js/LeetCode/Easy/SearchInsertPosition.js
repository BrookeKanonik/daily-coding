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

//Other solution (binary search as well):

var searchInsert = function(nums, target) {
    let lo = 0, hi = nums.length; // we might need to inseart at the end
    while(lo < hi) { // breaks if lo == hi
        let mid = lo + Math.floor((hi-lo)/2); // always gives the lower mid
        if (target > nums[mid]) {
            lo = mid + 1 // no way mid is a valid option
        } else {
            hi = mid // it might be possibe to inseart @ mid
        }
    }
    return lo;
};

//Resource for binary search:

//https://leetcode.com/problems/search-insert-position/solutions/423166/binary-search-101/

var searchInsert = function(nums, target) {
    let lo = 0
    let high = nums.length
    while (lo < high ){
        let middle = Math.floor((high+lo)/2)
        if (nums[middle] < target){
            lo = middle + 1
        }else{
            high = middle
        }
    }
    return lo;
};

//Other codes:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // includes,indexOf,rest operator,arrow function,sorting via sort method
     if(nums.includes(target))  //includes method
      return nums.indexOf(target); //returns index method//
     return [...nums, target].sort((a,b) => a-b).indexOf(target); //return where it shold be inserted//

    
};

var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;    
};

var searchInsert = function(nums, target) {
    //let ans = 0
    let left = 0
    let right = nums.length - 1
    while (left <= right){
        let mid = Math.floor((left + right)/2)
        if (nums[mid] === target){ //if the index has the target
            return mid
        }else if (nums[mid] < target){ //if target is bigger than mid val
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return left
};