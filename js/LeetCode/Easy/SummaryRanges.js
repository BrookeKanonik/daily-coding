/* Instructions: */

/*

You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
 

Constraints:

0 <= nums.length <= 20
-231 <= nums[i] <= 231 - 1
All the values of nums are unique.
nums is sorted in ascending order.

*/

//Initial code (works):

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = []
    let curr = nums[0] //check first one //4
    let currAdd = nums[0] //5
    for (let i=1; i< nums.length; i++){
        if (nums[i] !== currAdd + 1){
            if (curr === currAdd){
                res.push(`${curr}`)
            }else{
                res.push(`${curr}->${currAdd}`)
            }
            curr = nums[i]
            currAdd = nums[i]
        }else{
            currAdd ++;
        }
    }
    if (curr === currAdd){
        res.push(`${curr}`)
    }else {
        res.push(`${curr}->${currAdd}`)
    }
    return nums.length === 0 ? [] : res
};

//Other solution:

var summaryRanges = function (nums) {
    const result = [];
    let left = nums[0];
    for (let i = 1; i <= nums.length; i++) {
        if ((nums[i-1]+1) !== nums[i]) {
            left === nums[i-1] ? result.push(`${left}`) : result.push(`${left}->${nums[i-1]}`);
            left = nums[i];
        };
    };
    return result;
};