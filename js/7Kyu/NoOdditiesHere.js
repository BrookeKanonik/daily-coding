//Instructions:

/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

//Initial code (works):

function noOdds( values ){
    return values.filter(element => element % 2 === 0)
  }

//Best practice:

function noOdds( values ){
    function isEven(number){
      return number%2 == 0;
    }
    
    return values.filter(isEven);
  }