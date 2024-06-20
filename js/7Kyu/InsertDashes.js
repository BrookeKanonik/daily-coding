//Instructions:

/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

Note that the number will always be non-negative (>= 0).
*/

//Initial code (works):

function insertDash(num) {
    num = String(num)
   let sol = ''
   for (let i=0; i<num.length-1; i++){ 
     sol += num[i]
     if (Number(num[i]) % 2 && Number(num[i+1] % 2)){ //if the current number is odd and the following is as well
       sol += '-'
     }
   }
   sol += num[num.length-1] //DONT FORGET THE LAST ONE PLEASE OH MY GOSH
   return sol
 }
 
//Corky solution:

const isOdd = num => num % 2;

function insertDash(num){
    const result = [...String(num)]
    return result.map((digit, i) => isOdd(digit) && isOdd(result[i+1]) ? digit + '-' : digit).join('')
}

//Other solutions:

function insertDash(num) {
    //code me
  num = num.toString().split('')
   
   for(let i = 0; i < num.length; i++){
     if (num[i]%2 > 0 && num[i +1]%2 > 0){
       num[i] = num[i] + '-'
     }
   }
  
   return num.join('')
   
 }