//Instructions:

/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
*/

//Initial thoughts (still working on it, first getting rid of first time seeing the string):

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let location = str1.indexOf(str2)
    console.log(location)
    if (location === 0){
        return str1.slice(location + str2.length)
    }else if (location > 0){
        return str1.slice(0,location) + str1.slice(location + str2.length)
    }else{
        return ''
    }
};

//Best practice:

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 != str2 + str1) return ''
    let m = str1.length 
    let n = str2.length 

    let gcd = function (x,y){
        if (!y) return x 
        return gcd(y, x % y) 
    }

    let div = gcd(m,n)
    return str1.slice(0, div)
};

//o(n) time complexity
//ref: https://www.youtube.com/watch?v=DJHPBFmDtTw