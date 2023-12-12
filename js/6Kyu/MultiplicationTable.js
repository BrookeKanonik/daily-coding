//Instructions:

/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

//Initial code (works):

multiplicationTable = function(size) {
    let finalArr = []
    let currentArr = []
    for (let i = 1; i <= size ; i++ ){
      currentArr = [] 
      for (let j = 1; j <= size; j++){
        currentArr.push(i*j)
      }
      finalArr.push(currentArr) //each time the j completes, we push the values 
    } //arraying through the values all the way up to the size
    return finalArr //return all of the table values after we have pushed n**2 numbers 
  }

  
//Best practice:

multiplicationTable = function(size) {
    var result = [];
  
    for (var i = 0; i < size; i++) {
      result[i] = [];
      for(var j = 0; j < size; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    
    return result
  }

//NOTE: for my code, better variable names can be applied like row and result instead of final and current 