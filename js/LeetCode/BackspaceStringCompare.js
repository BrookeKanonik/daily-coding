//Instructions:

/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 

Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
*/

//Initial code (works):

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) { //we are taking in a string, can the string be empty? only can be lowercase letters and # values

    let sArray = []
    let tArray = []
    //want to loop through the string, and if i see a # character, i want to remove the previous value. these could be arrays? check if the arrays are the same.
    
        for (i = 0; i < s.length; i++){
            if (s[i] !== '#'){
                sArray.push(s[i])
            }else{
                sArray.pop()
            }
        }
    
        for (j = 0; j < t.length; j++){
            if (t[j] !== '#'){
                tArray.push(t[j])
            }else{
                tArray.pop()
            }
        }
        return sArray.join('') === tArray.join('') //note, when testing ['a','b','c'] !== ['a','b','c']
    };
    
    //we are going to return whether or not s is equal to t after calculating the backspaces
    //example is s = a#c t = d#cc# are equal since both are c = c

    //Improved code before submitting:

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) { //we are taking in a string, can the string be empty? only can be lowercase letters and # values

    let sArray = ''
    let tArray = ''
    //want to loop through the string, and if i see a # character, i want to remove the previous value. these could be arrays? check if the arrays are the same. made into strings to avoid a .join
    
        for (i = 0; i < s.length; i++){
            if (s[i] !== '#'){
                sArray += s[i]
            }else{
                sArray = sArray.slice(0,-1)
            }
        }
    
        for (j = 0; j < t.length; j++){
            if (t[j] !== '#'){
                tArray += t[j]
                console.log(tArray)
            }else{
                tArray = tArray.slice(0,-1)
                console.log(tArray)
            }
        }
        return sArray === tArray //note, when testing ['a','b','c'] !== ['a','b','c']
    };
    
    //we are going to return whether or not s is equal to t after calculating the backspaces
    //example is s = a#c t = d#cc# are equal since both are c = c

//Best practice:
  
var backspaceCompare = function(s, t) {
    // Helper function to find the next valid character given a position and string
    function getNextValidChar(s, index) {
        let backspaceCount = 0;
        
        // Traverse the string backward, counting backspaces and skipping characters
        while (index >= 0) {
            if (s[index] === '#') {
                backspaceCount++;
                index--;
            } else if (backspaceCount > 0) {
                backspaceCount--;
                index--;
            } else {
                break;
            }
        }
        
        return index;
    }
    
    let i = s.length - 1;  // Start from the end of s
    let j = t.length - 1;  // Start from the end of t
    
    while (i >= 0 || j >= 0) {
        // Find the next valid characters in both strings
        i = getNextValidChar(s, i);
        j = getNextValidChar(t, j);
        
        // If one string has characters remaining and the other doesn't, they are not equal
        if ((i >= 0 && j < 0) || (i < 0 && j >= 0)) {
            return false;
        }
        
        // Compare the characters at the current positions
        if (s[i] !== t[j]) {
            return false;
        }
        
        // Move to the previous character in both strings
        i--;
        j--;
    }
    
    // Both strings are equal after processing backspaces
    return true;
}

// Time complexity: O(N)
// The time complexity of this solution is O(N), where N is the length of the longer input string among s and t. The reason for this is that the algorithm processes each character of both strings once, and the while loop runs until both pointers have reached the beginning of their respective strings.

// Space complexity: O(1)
// The space complexity of this solution is O(1) because it uses a constant amount of extra space regardless of the input string lengths. The only extra space used is for variables and loop counters, and it doesn't depend on the size of the input strings.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    function get_next_valid_char_index(str, end) {
        let backspace_count = 0;
        while (end >= 0) {
            if (str.charAt(end) === '#') {
                backspace_count++;
            } else if (backspace_count > 0) {
                backspace_count--;
            } else {
                break;
            }
            end--;
        }
        return end;
    }

    let ps = s.length - 1;
    let pt = t.length - 1;

    while (ps >= 0 || pt >= 0) {
        ps = get_next_valid_char_index(s, ps);
        pt = get_next_valid_char_index(t, pt);

        if (ps < 0 && pt < 0) {
            return true;
        }
        if (ps < 0 || pt < 0) {
            return false;
        } else if (s.charAt(ps) !== t.charAt(pt)) {
            return false;
        }

        ps--;
        pt--;
    }

    return true;    
};