//Instructions:

/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/

//Initial code (works):

function factorial(n){
    let result = 1
    for (let i=1; i<=n; i++){
      result *= i 
    }
    return result 
  }

//Best practices:

const factorial = n => n ? factorial(n - 1) * n : 1; //recursion

function factorial(n){
    let answer = 1;
    
    while (n > 0) {
      answer *= n;
      n--;
    }
    
    return answer;
  }