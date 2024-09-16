//Instructions:

/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
 

Constraints:

1 <= n <= 231 - 1
*/

//Initial thoughts with recursion


var isHappy = function(n) {
    //let curr = 0 //undefined bc cannot redeclare 
    n=n.toString()
    let curr = 0 
    for (let i=0; i<n.length; i++){
        curr += (Number(n[i]))**2
    }
    if (curr <=9){
        if (curr === 1) return true
        else return false;
    } else {
        let newVal = curr
        isHappy(newVal)
    }
};

isHappy(19)

//solution:

var isHappy = function (n) {
    while (true) {
        n = String(n)
            .split('')
            .reduce((acc, digit) => acc + Math.pow(Number(digit), 2), 0);
        if (n < 10) {
            return n === 1 || n === 7;
        }
    }
};

isHappy(19)

//Second Attempt Answer:

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let storedVals = {}
    while(storedVals[n] === undefined){
        storedVals[n] = 'seen'
        let s = n.toString()
        let total = 0
        for (let i=0; i<s.length; i++){
            total += Number(s[i])**2
        }
        n = total
        console.log(total, storedVals)
    }

    return n === 1 ? true : false
};