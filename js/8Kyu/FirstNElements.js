//Instructions:

/*
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/

//Initial code (works and best practice):

//function take(arr, n) { //takes in a list/array and just returns the first 3 elements. for this we would need to use a slice.
  // should make it an arrow function
//}

//return is going to be an array/list of the first three elements
//example [0,1,2,3,4] ==> [0,1,2]
const take = (arr,n) => arr.slice(0,n) //remember based on indexes so this would be [0,3) essentially where it just includes 0,1,2 indexes
//remember we are also taking in a number n which is how many elements we want to return so it should be a slice from the beginning to n
