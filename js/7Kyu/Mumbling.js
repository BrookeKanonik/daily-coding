//Instructions:

/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

//Initial code (works):

function accum(s) {
	s = s.toUpperCase()
  let newWord = '';
  let many = 0;
  for (let i=0; i<s.length; i++){
    many = i 
    newWord += s[i] + s[i].toLowerCase().repeat(many) + '-'
  }
  return newWord.slice(0,-1)
}

//Best practice:

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}