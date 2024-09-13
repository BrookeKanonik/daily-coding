//Instructions:

/*
Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

//Initial code (works):

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let letterRefs = []

    for (i=0; i<s.length; i++){
        if (letterRefs[s[i]] === undefined){
            letterRefs[s[i]] = 1
        }else{
            letterRefs[s[i]] += 1
        }
    } //go through first word

    //if else on length
    for (let j=0; j < t.length; j++){
        if (letterRefs[t[j]] === undefined || letterRefs[t[j]] === 0){
            return false
        }else{
            letterRefs[t[j]] -=1
        }
    }

    return s.length === t.length ? true : false
};