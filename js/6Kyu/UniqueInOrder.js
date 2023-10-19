//Instructions:

/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

//Initial code (works):

var uniqueInOrder = function (iterable) {
  //taking in an array or string
  let array = []; //create an empty array
  //need to have a previous
  if (iterable.length === 0) {
    //empty array can have a 0 length property
    return []; //taking into account when there is an empty array
  } else {
    let prev = iterable[0];
    array.push(prev);
    for (let i = 1; i < iterable.length; i++) {
      if (prev !== iterable[i]) {
        array.push(iterable[i]);
      }
      prev = iterable[i];
    } //for loop to go through all the items
    //if it is the same as the one before it, do not push it to the array
    //if it is not the same, push it to the array
    //return the array of items where duplicates next to each other are not included
    return array;
  }
};
    
  
  //result should be an array with no duplicates that are next to each other
  //example: 'AABBCCDDAABB' --> ['A','B','C','D','A','B']
  //lowercase and capital letters are different 

//Best practices:

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

function uniqueInOrder(it) {
    var result = []
    var last
    
    for (var i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      }
    }
    
    return result
  }