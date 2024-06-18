//Instructions:

/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

//Initial code (works but does not like double empty strings and wants to see them as two):

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //go through each and see if there is a match, then add it to the ignore list and final results?
    let res = []
    let seen = []
    for (let i=0; i <strs.length; i++){
        let curr = []

        for (let j=1 + i; j< strs.length; j++){
            if (strs[i].split('').sort().join('') === strs[j].split('').sort().join('') && !seen.includes(strs[j])){
                console.log(i, strs[j])
                curr.push(strs[j])   
                seen.push(strs[j])
            }
        }
        if (!seen.includes(strs[i]))curr.push(strs[i])
        seen.push(strs[i])
        console.log('the push', curr)
        if (curr.length > 0) res.push(curr)
    }
    return res
};

//delete ones we have seen