//Instructions:

/*
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

 

Example 1:

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
Example 2:

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.
 

Constraints:

2 <= s.length <= 1000
s.length is even.
s consists of uppercase and lowercase letters.
*/

//Initial code (works):

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    //first we need to half the string 
    let half = s.length/2
    let firstHalf = s.slice(0,half)
    let secondHalf = s.slice(half)
    let vowels = 'aeiouAEIOU'
    let counterFirst = 0
    let counterSecond = 0
    for (let i=0; i <half ; i++){
        if (vowels.includes(firstHalf[i])){
            counterFirst++
        }
        if (vowels.includes(secondHalf[i])){
            counterSecond++
        }
    }
    return counterFirst === counterSecond

};

//Other solutions:

var halvesAreAlike = function(s) {
    const countVowels = (str) => {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
        return Array.from(str).filter(char => vowels.has(char)).length;
    };

    const length = s.length;
    const midPoint = length / 2;

    const firstHalf = s.substring(0, midPoint);
    const secondHalf = s.substring(midPoint);

    return countVowels(firstHalf) === countVowels(secondHalf);
};

https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/4550957/beats-100-2-approaches-explained-java-c-python-javascript/?envType=daily-question&envId=2024-05-31