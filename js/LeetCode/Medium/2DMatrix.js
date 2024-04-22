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
var searchMatrix = function(matrix, target) {
    //go through each row and see if the first number is bigger or equal to the target
    if (matrix[0][0] > target){
        return false
    } else {
            for (let i=0; i <matrix.length; i++){
        if (matrix[i][0] > target || matrix.length === 1 || i === matrix.length-1){ //if there is just one row // can also include && matrix[i][0] !== target 
            if (matrix[i][0] > target) i--; //go to prev row // && matrix.length !== 1 && matrix[i].length !==1
            console.log(i)
            for (let j=0; j < matrix[0].length; j++){ //go to the previous row to try and find the result 
                if (matrix[i][j] >= target){
                    if (matrix[i][j] === target){
                        return true
                    }
                    if (matrix[i][j] > target) {
                        return false
                    }
                }
                if (j === matrix[0].length-1 && matrix[i][j] < target){
                    return false 
                } //if it is the last number and still smaller 
            }
        }
        if (matrix[i][0] === target){
            return true
        }
    }
    }
};
