//Instructions:

/*
We need the ability to divide an unknown integer into a given number of even parts - or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

Complete the function so that it returns an array of integers representing the parts. If the input number is too small to split it into requested amount of parts, the additional parts should have value 0. Ignoring the order of the parts, there is only one valid solution for each input to your function!

Example:
splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
Inputs
The input to your function will always be valid for this kata.
*/

//Initial code (works):


var splitInteger = function(num, parts) { //we are taking in a number num representing the total when adding all elements together, and a number parts representing how many elements there need to be in the array
    // lets first check if it is even fully
    let iWhile = 0 //created for the while loop further down
    let finalArr = [] //where we will push our responses
    let closest = Math.floor(num / parts) //rounding down to the nearest whole number
    let total = 0 //calculating the total of the elements we have so far
    for (let i =0; i < parts; i++){ //looping through parts times to push the closest floored number into the array
      finalArr.push(closest)
      total += closest //calculating the total
      }
    while (total !== num){ //while total isnt equal to the number we have...        
      finalArr[iWhile] += 1 //change the element to be one digit higher 
      iWhile++ //go to the next element to do the same (if applicable)
      total ++ //adjust the total now
      }
    return finalArr
  }
  //we are returning the array that when added equal num and are as even as they can be
  //we need to take into account if the input number is too small to split into requested parts, we need to return 0 values ex (1,2) => [1,0]
  //example of another one is (2,2) => [1,1]

//Best practice:

function splitInteger(num, parts) {
    const remainder = num % parts;
    const int = Math.floor(num / parts);
  
    return [
      ...new Array(parts - remainder).fill(int),
      ...new Array(remainder).fill(int + 1)
    ];
  }