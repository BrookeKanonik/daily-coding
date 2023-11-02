//Instructions:

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/

//Initial code (works):

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) { //taking in a roman numeral as a string
    //for example we would take in string 'III'
    let count = 0 //initializing our count
    for (let i=0; i < s.length; i++){ //looping through all of the characters
        if (s[i] === 'I' && s[i + 1] !== 'X' && s[i+1] !=='V'){ //checking if we have anything after to take into account
        count += 1
        }else if ((s[i] === 'I' && s[i + 1] === 'X') || (s[i] === 'I' && s[i + 1] === 'V')){
            count -=1
        }else if (s[i] === 'X' && s[i + 1] !== 'L' && s[i+1] !=='C'){
            count += 10
        }else if ((s[i] === 'X' && s[i + 1] === 'L') || (s[i] === 'X' && s[i + 1] === 'C')){
            count -= 10
        }else if (s[i] === 'C' && s[i + 1] !== 'D' && s[i+1] !=='M'){
            count += 100
        }else if ((s[i] === 'C' && s[i + 1] === 'D') || (s[i] === 'C' && s[i + 1] === 'M')){
            count -= 100
        }else if (s[i]=== 'V'){
            count += 5
        } else if (s[i] === 'L'){
            count += 50
        } else if (s[i] === 'D'){
            count += 500
        } else {
            count += 1000
        }
        
    }
    return count
    // 'MCMXCIV"
    
    //COUNT = 1000 - 100 + 1000 -10 +100 -1 + 5 = 1994 
    
        
    }; //need to return it as a number. basic idea is to loop through the string and based on what character we have, add an amount to the base value. need to have conditions such as if the last digit is not a I, do subtraction
    //for 'III' example, we looped through and returned the value 3

    //Best practice:

    var romanToInt = function(s) {
        const sym = {
          'I': 1,
          'V': 5,
          'X': 10,
          'L': 50,
          'C': 100,
          'D': 500,
          'M': 1000
      }
  
      let result = 0;
  
      for (let i = 0; i < s.length; i++) {
          const cur = sym[s[i]];
          const next = sym[s[i + 1]];
  
          if (cur < next) {
              result += next - cur;
              i++;
          } else {
              result += cur;
          }
      }
  
      return result;
  };