// Instructions:

/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

//Initial code (works):

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let storedLetters = {} 
    for (let i = 0; i < magazine.length; i++){ //go through the magazine and store letters and occurrences in hash map
    //can simply storedLetters[magazine[i]] since we are using this multiple times
        if (storedLetters[magazine[i]] !== undefined){
            storedLetters[magazine[i]] += 1
        } else {
            storedLetters[magazine[i]] = 1
        }
    }


    for (let j = 0; j < ransomNote.length; j++){
        if (storedLetters[ransomNote[j]] === 0 || storedLetters[ransomNote[j]] === undefined){
            return false
        } else{
            storedLetters[ransomNote[j]] -= 1
        }
    }
    return true
};

//Other solution:

var canConstruct = function (ransomNote, magazine) {
    for (const char of magazine) {
      ransomNote = ransomNote.replace(char, "");
    }
    
    if (!ransomNote) return true;
    else return false;
  };