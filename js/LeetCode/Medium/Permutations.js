//Instructions:

/*

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.

*/

//Initial thoughts:

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) { //possibilities are by factorial 
    let size = nums.length
    let result = []
    let curr = []
    for (let i = 0; i < nums.length; i++){
        curr[0] = nums[i]
        while (curr.length < nums.length && result.length === (Math.factorial(size - 1)) * (i+1)){ //need another to check result so far and see if it is equal to a certain length n - 1 factorial of that 
            //need another loop to look at the nums values and disregard those that are already in our current
            for (let j = 0 ; j <nums.length; j++){
                if (i !== j){
                    if (!curr.includes(nums[j])){
                        curr.push(nums[j])
                    }
                    if (nums.length === curr.length){
                        result.push(curr)
                        curr = nums[i]
                    }
                }
            }
            //if size of nums, add it to result and reset curr 
        }
    }
    return result 
};


/* [1,2,3,4]

[1,2,3,4]
[1,2,4,3]
[1,3,4,2]
[1,3,2,4]
[1,4,2,3]
[1,4,3,2]

X 4 = 24 = 4 * 3 * 2 
*/

//Best practice:

const backtrack = (nums, answers, current) => {
    if (nums.length === current.size) {
      answers.push([...current]);
      return;
    }
  
    for (const num of nums) {
      if (!current.has(num)) {
        current.add(num);
        backtrack(nums, answers, current);
        current.delete(num);
      }
    }
  };
  
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  var permute = function (nums) {
    const answers = [];
    backtrack(nums, answers, new Set());
    return answers;
  };

//Time complexity: O(N * N!)

//Space complexity: O(N)

//Reference: https://leetcode.com/problems/permutations/solutions/4277668/backtracking-o-n-n-time-and-o-n-space/

//Other solution:

let permute = function (nums) {
  if (nums.length === 0) return [[]]
  if (nums.length ===1) return [nums]
  if (nums.length ===2) return [[nums[0], nums[1]], [nums[1], nums[0]]]

      return nums.map((n) => {
        const rest = nums.filter(i => i !== n); //filter numbers that are not the current number
        const per = permute(rest); //get permutation for the rest of the elements
        return per.map(i => [n,...i]) //n is the element we took out and i is the perumatation result 
      }).flat()  
}

// space is 0(n!) for the first position we have n numbers, then n-1, then n-2 ...
//time will be 0(n!) because of the recursive structure we need to look n then n-1 times then n-2.


let permute = function (nums) {
  if (nums.length === 0)  return [[]]
  if (nums.length === 1) return [nums]
  if (nums.length ===2) return [[nums[0], nums[1]], [nums[1], nums[0]]]

  return nums.map(n => {
    const rest = n.filter(element => element !== n)
    let perm = permute(rest)
    perm.map(element => [n,...element])
  }).flat(1)
}
