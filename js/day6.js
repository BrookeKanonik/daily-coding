//Instructions:

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

//My initial code:

const findAverage = array => array[0] === undefined ? 0 : array.reduce((a,b) => a+b,0)/array.length

//Best practice:

var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }