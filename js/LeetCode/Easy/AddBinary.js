//Instructions:

/*
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

//Initial code (works for some, need to investigate might be because of it being a large number and including e):

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let newA = parseInt(a,2)
    let newB = parseInt(b,2)
    let total = newA + newB

    return total.toString(2)
};

//Solutions:

/*
Greetings comrades:

Below is my boring but clear solution, using the proposed BigInt object.

The idea is to use inputs, a and b to build two binary literals. Calculating the sum is done by calling the BigInt function on our binary literals, adding them together and returning the sum with a call to the toString method with 2 as the argument, since we are working with binary numbers.
*/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const aBin = `0b${a}`
  const bBin = `0b${b}`
  const sum = BigInt(aBin) + BigInt(bBin)
  return sum.toString(2)
};

var addBinary = function (a, b) {
    return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
  };