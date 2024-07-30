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

//Initial thoughts:

function lengthOfLongestSubstring(s){
    let longest = 0
    //track current amount until a repeat letter 
    let seenBefore = {}
    let currCount = 0
    //go through for loop and mark 1 for new characters and 0 for ones weve seen already, logging the length 
    for (let i=0; i<s.length; i++){
        let seenCount = seenBefore[s[i]]
        if (seenCount !== undefined && seenCount !== 0){ //if we have seen it
            let currLength = i + 1 - seenBefore[s[i]]
            if (currLength > longest) longest = currLength
            seenBefore[s[i]] = i + 1
           // currCount = 1
        }else if (seenCount === 0){
            seenCount = 0
           // currCount = 0
        }else {
            seenBefore[s[i]] = i + 1
            //currCount ++;
        }
        }
        return currCount > longest ? currCount : longest ;
    }

//Solution:

function lengthOfLongestSubstring(s){
    let longestStr = 0;
    let set = new Set();

    let left = 0;
    let right = 0;

    while (right < s.length){
        let letter = s[right]
        if(!set.has(letter)){
            set.add(letter)
            longestStr = Math.max(longestStr, set.size);
            right++;
        }else{
            set.delete(s[left]);
            left++
        }
    }
    return longestStr;
}