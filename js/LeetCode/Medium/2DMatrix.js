//Instructions:

/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
*/

//Initial code (works):

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  //go through each row and see if the first number is bigger or equal to the target
  if (matrix[0][0] > target) {
    return false;
  }

  for (let i = 0; i < matrix.length; i++) {
    if (
      matrix[i][0] > target ||
      matrix.length === 1 ||
      i === matrix.length - 1
    ) {
      //if there is just one row // can also include && matrix[i][0] !== target
      if (matrix[i][0] > target) i--; //go to prev row // && matrix.length !== 1 && matrix[i].length !==1
      console.log(i);
      for (let j = 0; j < matrix[0].length; j++) {
        //go to the previous row to try and find the result
        if (matrix[i][j] >= target) {
          if (matrix[i][j] === target) {
            return true;
          }
          if (matrix[i][j] > target) {
            return false;
          }
        }
        if (j === matrix[0].length - 1 && matrix[i][j] < target) {
          return false;
        } //if it is the last number and still smaller
      }
    }
    if (matrix[i][0] === target) {
      return true;
    }
  }
};

//My other solution (after adjustments to make shorter):

let solutionMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++){ //loop through matrix and look at first numbers
        if (matrix[i][0] <= target && matrix[i][matrix[0].length-1] >= target) {
            //for loop 
            for (let j=0; j < matrix[0].length; j++){
                if (matrix[i][j] === target){
                    return true
                }
            }
        }
    }
    return false 
}

//Other solution:

let searchMatrix = function (matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;

    //run binary search
    while (left <= right) {
        let mid = Math.floor(right) //the number will never go outside of the range
        let midVal = matrix[Math.floor(right / cols )][right%cols]

        if (midVal === target) return true;
        if (target < midVal) right = mid - 1;
        else left = mid + 1
    }
    return false;
}

//Code after trying again (need to look at shortened code):

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  //first determine if the first item in the array is less than or equal to the target
  let currVal = 0;
  if (matrix.length ===1){ //condition it is just length 1
      for (let a=0; a <matrix[0].length; a++){
          if (target === matrix[0][a]){ //checking if current square is desired value
              return true;
          }
      }
      return false;
  }
  for (let i=1; i<matrix.length; i++){ //if it is bigger than length 2
      if (target < matrix[i][0]){ //if the current row is bigger than target, go to the target row
          for (let j=0; j<matrix[currVal].length; j++){
              if (target === matrix[currVal][j]){
                  return true;
              }
          }
          return false;
      }
      if (target === matrix[i][0]){ //added incase it is just [[1], [3]]
          return true;
      }
      currVal ++;
  }
  //go through the last one if it is possibly there
  for (let l=0; l<matrix[0].length; l++){
      if (target === matrix[matrix.length-1][l]){
          return true;
      }
  }
  return false;
};