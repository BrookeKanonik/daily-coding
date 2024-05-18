//Instructions:

/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/

//Initial thoughts:

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    //need to loop through the digits and then concat 
    let res = [] //results are
    for (let i=0; i<digits.length; i++){ //going through all digits
        //return a string of each possibility to the array
        if (digits[i] === '2'){
            if (res.length <= 0){
                res.push('a', 'b', 'c')
            }else { //need to add on to it
                        res.concat(res).concat(res)
                    for (let j=0; j< res.length; j++){ //might an issue with 
                        if (j % 3 === 0){
                            res[j] += 'a'
                        } else if (j % 3 == 1){
                            res[j] += 'b'
                        } else if (j % 3 == 2){
                             res[j] += 'c'
                        } //wont work will just concat same letter...
                    }
            }
        }
    }
    return res
};

//Best practice:
//time complexity = 4**n could be the worst if we have ones that have 4 letters. O(4**n*n)
//space: O(4**n*n) referring to the height of the tree

var letterCombinations = function(digits){
    //global res 
    const result = []

    //alpha hash map
    const alpha = {
        '2' : 'abc',
        '3' : 'def',
        '4' : 'ghi',
        '5' : 'jkl',
        '6' : 'mno' ,
        '7' : 'pqrs',
        '8' : 'tuv',
        '9' : 'wxyz'
    }

    //dfs recursive helper 
    const dfs = (i,digits,slate) => {
        //base case
        if (i=== digits.length){
            result.push(slate.join(''))
            return;
        }

        //dfs recursive case
        let chars = alpha[digits[i]] //alpha hash map to map numbers to letters

        for (let char of chars){
            slate.push(char);
            dfs(i+1, digits,slate);
            slate.pop()
        }
    }

    dfs(0, digits, [])

    return result;

}
