//Instructions:

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
Accepted
2.8M
Submissions
6.7M
Acceptance Rate
4
*/

//Initial code (works):

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) { //taking in a parameter that is an array of strings
    //we will need to find a way to look at all the first letters in each word. recursion??
    let current = 0;
    let word = '';
    let different = false;
    while (!different && current < strs[0].length ) { //to check if it hit the else case and to make sure we didnt go past the last character incase they are all the same word
        for (let i = 0; i <strs.length; i++){
            if (i === 0){
                word += strs[i][current];
            } else {
                if (word[current] !== strs[i][current]){
                    //word[current] = '';
                    word = word.slice(0,-1) //REMEMBER, slice need to reinitiate 
                    different = true;
                    break; //break to get out so if this happens not at the last word, we dont remove more letters from the word variable
                }
            } 
        }
        current ++
    }
    return word
}; //returning a value as a string of the longest common prefix all the strings have, if they do not have anything in common, return ""

//Initial code round 2 (works):

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let index = -1
    let result = ''
    let temp = ''
    while (index < strs[0].length){
        index++;
        temp=''
        for (let i=0; i<strs.length; i++){
            if(strs[i][index]=== undefined){ //did we already finish one word?
                return result;
            }
            if (temp==='') temp = strs[i][index] //did we set the temp?
            if (temp !== strs[i][index]) return result
            if (i === strs.length -1) result += temp
        }
    }
    return result
};

//Other solution:

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(s) {
    if(s.length === 0) return "";
    let prefix = s[0];
    for(let word of s ) {
        while(word.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if(prefix === "") return "";
        }
        if(prefix === "") return "";
    }
    return prefix
};