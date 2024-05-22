//Instructions:

/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

//Initial code (works):

function findOdd(A) {
    //happy coding!
    //we need to store all occurrences then see which one is odd 
    let stored = {}
    for (let i=0; i<A.length; i++){
      if(stored[A[i]] !== undefined){
        stored[A[i]] += 1 //update the value to one more
      }else{
        stored[A[i]] = 1
      }
    }
    
    //now we need to go through the mapped items and see which one is odd
    for (const prop in stored){
      if(stored[prop] % 2){
        return Number(prop) //needs to be returned as a number as it is stored as a string
      }
    }
  }

  //Best practices:

  const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

  function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }