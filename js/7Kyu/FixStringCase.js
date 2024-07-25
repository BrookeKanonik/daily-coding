//Instructions:

/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!

Please also try:

Simple time difference

Simple remove duplicates
*/

//Initial code (works):

function solve(s){ //string filled with upper/lowercase letters. no nums
    //go through a for loop
  let half = s.length/2 //4
  let count = 0
  //forEach and update the count as needed
  s.split('').forEach(element => {
    if (element === element.toLowerCase()) count++
  })
  //change the s as needed
  return count >= half ? s.toLowerCase() : s.toUpperCase()
}

//'ABBigail'
// 'Code' => 'code'
// 'COde' => 'code'
// 'CODe' => 'CODE'

//Other solution:

function solve(s){
    let lowerC = 0;
    let upperC = 0;
    for( let i = 0;i<s.length;i++){
      if( s[i] == s[i].toUpperCase()){
        upperC++;
      }
      else{
        lowerC++;
      }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}