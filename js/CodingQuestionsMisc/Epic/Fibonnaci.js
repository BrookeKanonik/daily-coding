//Instructions:

/*
The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. It is often used in algorithm examples, and is defined by the following formula: F(n) = F(n-1) + F(n-2), with F(0) = 0 and F(1) = 1. Your task is to implement the Fibonacci algorithm in three different methods: 1. Recursively 2. Iteratively 3. Using Memoization.
*/

//Recursive:



//Iteratively:

function fib(num){
    let first = 0
    let second = 1
    let fibNumbers = []
    if (num >= 1){
        fibNumbers.push(0)
    }
    if (num >=2){
        fibNumbers.push(1)
    }
    for (let i=3; i <= num; i++){
        let temp = first + second
        fibNumbers.push(temp)
        first = second
        second = temp
    }
    return fibNumbers
}

//Using Memoization:

