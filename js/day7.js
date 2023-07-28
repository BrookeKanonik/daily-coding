// Instructions:

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

//Initial thoughts:

function solution(str, ending){
    let count = 0
    let endingLength = ending.length
    for (let i = 1; i <= ending.length; i++){
      if (str[-i] === ending[-i]){
        count ++
      }
    
    }
    
    if (count === endingLength){
      return true
    }
    
        
    
  }

  //Best practice/solution:

  function solution(str, ending){
    return str.endsWith(ending);
  }
