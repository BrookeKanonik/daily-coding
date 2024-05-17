//Instructions:

/*
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.

*/

//Initial code:

function wordsToMarks(string){
    let subtract = 96 //charCodeAt for a is 97
    let total = 0
    for (let i=0; i<string.length;i++){
      total = total + string[i].charCodeAt() - 96
    }
    return total
  }

//Best practice with reduce method:

const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)