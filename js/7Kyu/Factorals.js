//Instructions:

/*
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

More details about factorial can be found here.
*/

//Initial code (works for base cases but not all for BOTH solutions):

// function factorial(n) //need to remember to set initial to 1 so that result does not equal 0
// {
//   let total = 1
//   for (let i = 0; i <= n; i++){
//     if (i > 0){ // 0! is 1 so we need to have a condition where values are bigger than 0. throwing a rangeError for some reason? 
//       total *= i
//     } 
//   }
//   return total
// }

function factorial(n) //need to remember to set initial to 1 so that result does not equal 0
{
  let total = 1
  n = n + 1 //DO NOT USE ++ IN THIS SITUATION
  for (let i = 1; i < n; i++){
    total *= i 
    } 
   return total
  }
 
//BOTH HAVE RANGE ERRORS?

//Best practice and solution:
function factorial(n) {
    if (n < 0 || n > 12)
      throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
  }