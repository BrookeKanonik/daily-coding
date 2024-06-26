//Instructions:

/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

//Initial code (works and best practice):

const getEvenNumbers = nums => nums.filter(element => element % 2 === 0)
