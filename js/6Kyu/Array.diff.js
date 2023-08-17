//Instructions:

/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

* @param {array} two arrays - takes in two arrays 
* @return {array} 
*/

//Initial thought process:

//need to do a-b and delete all instances of b. we can have cases where first or second is an empty array.

function arrayDiff (a,b){
   
    if (a.length === 0 || b.length === 0){
        return a
    } else { 
        
           return a.filter((element, index) => element !== b[0] && element !== b[1]) //works for if b is only length 2. need to make this into a loop.
        }
     
    }
    


//should return one array back 
//example ([55,4,3,2], [4]) => [55,3,2]

//Best practice:

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }