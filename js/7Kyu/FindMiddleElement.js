//Instructions:

/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

//Initial code (works):

function gimme (triplet) { //take in an array of numbers
    let organizedTriplet = [...triplet].sort((a,b)=> a-b) //we will need to sort to find out which is the middle  
    let middle = organizedTriplet[1]
    return triplet.indexOf(middle) //once we find the middle number when sorted, return the original array with the index of the middle item
  }
  //return the index of the middle number
  //example [2,6,1] returns 0
  
  //nlogn for sorting
  //middle is constant
  //indexOf at worst is n 
  
  // --> n + nlogn technically but can say nlogn since it is greater
  