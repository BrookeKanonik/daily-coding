//Instructions:
/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.


 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/
/*
Area = length * width
8*5 = 40
7*7 = 49

1. Create a variable to return the final number
2. maxArea = height * length
3. [1,8,6,2,5,4,8,3,7]
    ^                ^ to have index pointers
4. have 2 pointers at each end of the array 
5. length will be index of end pointer = first pointer

area = 1 * (right - left) 8 = 8
area = 7 * 7 = 49
area = 

//keep pushing the lower number until you hit the same one
//so we will stop when the numbers are the same 
//can do a Math.min(height[left], height[right])
 */


//Initial code (works):

var maxArea = function(height) {
    let maxArea = 0 // 8 
    let left = 0
    let right = height.length - 1

    while (left < right ){
       let smallerSide = Math.min(height[left], height[right])
       let len = right - left 

       let currentArea = smallerSide * len

       maxArea = Math.max(maxArea, currentArea)
       if (height[left] < height[right]){
             left ++
         } else {
             right --
         }
    }
    
    return maxArea
};

//Time Complexity: 0(n) //since we just have a while loop
//Space Complexity: 0(1) //we are not create any extra arrays, data structures etc 

//New take:

var maxArea = function(height) {
    //two pointers 
    let left = 0
    let right = height.length - 1 // 8
    let area = 0

    while (left < right){
        let width = Math.min(height[left], height[right])
        let length = right - left

        if (length * width > area) area = length * width
        if (width === height[left]){
            left ++
        }else {
            right --;
        }
    }
    return area
};