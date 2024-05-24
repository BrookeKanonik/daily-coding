//Instructions:

/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

//Initial code (works):

// write the function isAnagram
var isAnagram = function(test, original) {
    //must make both to lowercase
    test = test.toLowerCase()
    original = original.toLowerCase()
    //must join cannot set one array equal to another
    return test.split('').sort().join('') === original.split('').sort().join('')
  };
  
//Best practice:

// write the function isAnagram
var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };