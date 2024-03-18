//Instructions:

/*
You are given an input string.

For each symbol in the string if it's the first character occurrence, replace it with a '1', else replace it with the amount of times you've already seen it.

Examples:
input   =  "Hello, World!"
result  =  "1112111121311"

input   =  "aaaaaaaaaaaa"
result  =  "123456789101112"
There might be some non-ascii characters in the string.
*/

//Initial code (works):

function numericals(s){
    //create a map updating the number of times we see a character
    //if it does not exist, store 1 and concat that value to the returned string (or array)
    let map = {} //store how many times we have seen it
    let answer = [] //acc value 
    for (char of s){ //OF!! 
      map[char] ? map[char] = map[char] + 1 : map[char] = 1 //if it exists, update value, or make it one
      answer.push(map[char])
    }
    
    return answer.join('') // result. we could have also concat to string 
  }

//Other solutions:

function numericals(input) {
    let obj = {};
    let result = "";
    for (let i = 0; i < input.length; i += 1) {
        let current = input[i];
        if (obj[current]) {
            obj[current] += 1;
        } else {
            obj[current] = 1;
        }

        result += obj[current];
    }

    return result;
}

function numericals(str) {
    const map = {},
          result = [];

    for (char of str) {
        map[char] = map[char] + 1 || 1;
        result.push(map[char]);
    }

    return result.join('');
}


