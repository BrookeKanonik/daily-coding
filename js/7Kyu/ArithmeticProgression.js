//Instructions:

/*
In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

The result should be a string of numbers, separated by comma and space.

Example
# first element: 1, difference: 2, how many: 5
arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"
*/

//Initial code (works):

function arithmeticSequenceElements(a, d, n) {
	let initial = a //1
  let res = `${a}, `
  for (let i=1; i<n; i++){ //5
    if (i !== n - 1){
      res += `${a + d}, `
      a += d
    }else {
      res += `${a + d}`
    }
  }
  return res
}

//Better solution:

//do a while loop 

//starting number, what we add to that number, how many times
//taken in as integers
// 1, 2, 5

function arithmeticSequenceElements(a, d, n) {
	//declare some variables
  let current = a
  let i = 0
  let finalNumbers = []
  
  while (i < n){
    finalNumbers.push(current) //push current
    current += d
    i++;
  }
  return finalNumbers.join(', ')
}

//return a string that has the results of initial number + some other number x times seperated by a comma

//'1, 3, 5, 7, 9'
