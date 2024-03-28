//Instructions:

/*
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

//Initial Code (works for some):

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // includes check in for loop
    let checking = ''
    let howLong = 0
    for (let i=0; i<s.length; i++){
        if (!checking.includes(s[i])){
            checking += s[i]
        }else {
            if (checking.length > howLong){
                howLong = checking.length
            }
            checking = s[i]
        }
    }
    return howLong
};

//Solution with credit:

/*
Time Complexity = O(N)
Space Complexity = O(N)
*/

var lengthOfLongestSubstring = function(s) {
    // keeps track of the most recent index of each letter.
    const seen = new Map();
    // keeps track of the starting index of the current substring.
    let start = 0;
    // keeps track of the maximum substring length.
    let maxLen = 0;
    
    for(let i = 0; i < s.length; i++) {
        // if the current char was seen, move the start to (1 + the last index of this char)
        // max prevents moving backward, 'start' can only move forward
        if(seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
        seen.set(s[i], i);
        // maximum of the current substring length and maxLen
        maxLen = Math.max(i - start + 1, maxLen);
    } 
    
    return maxLen;  
};

/* https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/731639/javascript-clean-heavily-commented-solution/ */