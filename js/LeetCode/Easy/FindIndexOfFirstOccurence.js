//Instrcutions:

/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
*/

//Initial code (works):

/**
 * @param {string} haystack
 * @param {string} needle //eekhappy 'happy' //eekhapp
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let indexAns = -1; //in the case it is not correct, could be blank
    let currentVal = 1
    for (let i=0; i <haystack.length; i++){
        if (haystack[i] === needle[0]){
            indexAns = i;
            if(needle.length === 1){ //adjusted 
                return indexAns //in the case it is just one letter
            }
            for (let j= indexAns + 1; j < haystack.length; j++){
                if (haystack[j] === needle[currentVal]){
                    currentVal +=1 
                    if (currentVal === needle.length && needle.length <= haystack.length){ //adjusted, incase needle is bigger than haystack, check
                        return indexAns
                    }
                } else {
                    indexAns = -1
                    currentVal = 1
                    break;
                }
            }
        }
    }
    return -1 //oriignally indexAns but should be -1
};

//Ajusted code to make it neater:

/**
 * @param {string} haystack
 * @param {string} needle //eekhappy 'happy' //eekhapp //a a //aa aaa
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let indexAns; 
    for (let i=0; i <haystack.length; i++){
        indexAns = i;
        for (let j = 0, k = indexAns; j < needle.length; j++, k++){
            if (haystack[k] === needle[j]){
                if (j === needle.length-1){ 
                    return indexAns
                }
            } else {
                break;
            }
        }
    }
    return -1 //oriignally indexAns but should be -1
};
