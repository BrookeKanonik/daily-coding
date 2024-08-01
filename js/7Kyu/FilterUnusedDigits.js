//Instructions:

/*
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.
*/

//Initial code (works):

function unusedDigits(...args) {
    //note they are coming in seperted by commas...
    let results = ''
    let numbers = [...args].join('') //have them as a string now
    for (let i=0; i <=9; i++){
      if (!numbers.includes(i)) results += i
    }
    return results;
  }

//can also  do it without [...args] and just do args.join('')

//Other solution:

const unusedDigits = (...arr) => {
	var digits = arr.join();

	return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
		.filter(x => !digits.includes(x))
		.join('');
};