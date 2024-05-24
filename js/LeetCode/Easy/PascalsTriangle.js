//Instructions:

/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30
*/

//Initial code (works):

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = []
    if (numRows === 1){
        return [[1]]
    }
    if (numRows === 2){
        return[[1], [1,1]]
    }
    else {
        res.push([1])
        res.push([1,1])
        for (let i=2; i<numRows; i++){
            let temp = []    
            for (let j=0; j<res[i-1].length; j++){ //going through the prev result
                if (j === 0){
                    temp.push(1)
                }else {
                    temp.push(res[i-1][j-1] + res[i-1][j])
                }
            }
            temp.push(1)
            res.push(temp)
        }
    }
    return res
};