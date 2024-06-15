//Instructions:

/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

//Initial code (works):

function smallEnough(a, limit){
    //go through and check
    for (let i=0; i<a.length; i++){
      if (a[i] > limit){
        return false
      }
    }
    return true
  }
  
  //cannot do with forEach

//Best practice:

function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }