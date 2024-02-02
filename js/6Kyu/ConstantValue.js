//Instructions:

/*
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
For C: do not mutate input.

More examples in test cases. Good luck!

If you like this Kata, please try:

Word values

Vowel-consonant lexicon
*/

//Initial code (works):

function solve(s) {
    let vowel = 'aeiou'
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let highest = 0
    let current = 0
    for (let i=0; i <s.length; i++){
      if (!vowel.includes(s[i])) { //if it does not contain a vowel
        current += (alphabet.indexOf(s[i]) + 1) //checks the index of the letter and then adds one
        if ( i === s.length-1) {
          if (current > highest){
          highest = current
        }
        }
      } else {
        if (current > highest){
          highest = current
        }
        current = 0
      }
    }
    return highest
  };

//Best practice:

function solve(s) {
    let highest = 0
    let sum = 0
    
    for (const char of s) {
      if (isConsonant(char)) {
        sum += getValue(char)
        
        if (highest < sum) {
            highest = sum
        }
      } else {
        sum = 0
      }
    }  
    
    return highest
  };
  
  function getValue(char) {
    return char.charCodeAt(0) - 97 + 1
  }
  
  function isConsonant(char) {
    return !'aeiou'.includes(char)
  }