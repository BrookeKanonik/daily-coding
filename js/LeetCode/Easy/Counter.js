//Instructions:

/*
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Example 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 

Constraints:

-1000 <= n <= 1000
0 <= calls.length <= 1000
calls[i] === "call"
*/

//Initial thoughts:

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let result = []
    let count = n
    return function() {
        result.push(count)
        count++;
    };
    return result 
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

 /*In JavaScript, a function can return a closure. A closure is defined as a function and the variables declared around it (it's lexical environment).*/

 /*
 A closure is created when a function is defined inside another function, and the inner function references variables in the outer function's scope. When the inner function is returned from the outer function, it retains a reference to the outer function's scope, and can continue to access those variables even after the outer function has finished executing. Vice-Versa is not true!!
 */

 /*
 Thus closures are useful for creating private variables and functions, implementing partial function application, and preserving state in asynchronous code.
 */

const createCounter = n => () => n++

//function that returns an anonymous function that increments the value and it is preserved due to closure

//Other format:

var createCounter = function(n) {
    return ()=> n++
};

//Time and space o(n):

//https://leetcode.com/problems/counter/solutions/3491300/day2-o-1-understanding-closure-in-easy-way-and-its-practical-uses/