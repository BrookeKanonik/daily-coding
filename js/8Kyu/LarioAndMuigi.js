//Instructions:

/*
Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

The pipes are correct when each pipe after the first is 1 more than the previous one.

Task
Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
*/

//Initial code (works):

function pipeFix(numbers){
    if(numbers.length === numbers[numbers.length-1]){
      return numbers
    } else {
      let arr = []
      let start = numbers[0]
      let end = numbers[numbers.length-1]
      for (let i = start; i<= end; i++){
        arr.push(i)
      }
       return arr
    }
  }

//Best practice: the above but without the initial condition 