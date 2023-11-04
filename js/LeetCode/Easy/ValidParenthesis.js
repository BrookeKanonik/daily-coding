//Instructions:

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

//Initial code (works for () [] and {} cases but not [()]):

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) { //take in a string of brackets //will there be cases where there are no brackets? possibly but there will be no spaces 
    //example is "()" to which we should return true as it is closed by the correct set of brakcets 
    //idea, go through each of them and see based on even/odds?
    
    let value = true
    //()[]
    for (let i=0; i<s.length; i++){ //go through all of the strings
    if ((s[i] === '(' && s[i+1] === ')' ) || (s[i] === '{' && s[i+1] === '}' ) || (s[i] === '[' && s[i+1] === ']' )){
    i++ //check the next set
    } else {
      value = false 
    }
    
    }
      return value
    }; //return true or false based on if we can close them properly 
    
    //console.log(isValid("()"), true)
    //console.log(isValid("(]"), false)

    //Best practice:

    var isValid = function(s) {
        // Initialize stack to store the closing brackets expected...
        let stack = [];
        // Traverse each charater in input string...
        for (let idx = 0; idx < s.length; idx++) {
            // If open parentheses are present, push it to stack...
            if (s[idx] == '{') {
                stack.push('}');
            } else if (s[idx] == '[') {
                stack.push(']');
            } else if (s[idx] == '(') {
                stack.push(')');
            }
            // If a close bracket is found, check that it matches the last stored open bracket
            else if (stack.pop() !== s[idx]) {
                return false;
            }
        }
        return !stack.length;
    };