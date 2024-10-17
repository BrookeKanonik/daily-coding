//Instructions:

/*You are given an integer num. You can swap two digits at most once to get the maximum valued number.

Return the maximum valued number you can get.

 

Example 1:

Input: num = 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
Example 2:

Input: num = 9973
Output: 9973
Explanation: No swap.
 

Constraints:

0 <= num <= 108
*/

//Initial code (works):
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let numStr = num.toString()
    //go through loop wise and see if the numbers after it are greater than current one. if not no swap
    for (let i=0; i < numStr.length -1; i++){ //going through them all
        let currHighest = -1 //gotta set it to something to compare
        let locationHighest = 0
        for (let j= i + 1; j < numStr.length; j++){ //look at nums after 
            if (numStr[j] >= currHighest && numStr[j] > numStr[i]){
                currHighest = numStr[j] //set it as new highest
                locationHighest = j
            }
            if (j === numStr.length - 1 && currHighest !== -1){
                numStr = numStr.split('')
                let temp = numStr[i] //how do i switch... array?
                numStr[i] = numStr[locationHighest] 
                numStr[locationHighest] = temp
                return Number(numStr.join(''))
            }

        } 

    }
    return num
};