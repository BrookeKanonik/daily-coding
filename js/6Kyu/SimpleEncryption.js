//Instructions:

/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

This kata is part of the Simple Encryption Series:

Simple Encryption #1 - Alternating Split
Simple Encryption #2 - Index-Difference
Simple Encryption #3 - Turn The Bits Around
Simple Encryption #4 - Qwerty
Have fun coding it and please don't forget to vote and rank this kata! :-)
*/

//Initial code (encrypt works, decrypt does not):
function encrypt(text, n) { //take in a text as a string and an n integer for how many times we will run this function
  //may consider a for loop because we know how many times we are doing this
  let odd =''
  let even =''
  for (let j=0; j < n ; j++){
      for (let i=0; i < text.length; i++){
    if (i%2){
      odd += text[i]
      
    }else if (i%2 === 0){
      even += text[i]
      
    }
    
    
  } 
      text = odd +even
    odd = ''
    even = ''
     
  }

return text
    
}
//result should be the final number after concatinating n number of times
//example: "1234" and 2 -> 2413 -> 4321

function decrypt(encryptedText, n) {

 let odd =''
  let even =''
  for (let j=0; j < n ; j++){
      for (let i=0; i < encryptedText.length; i++){
    if (i%2){
      odd += encryptedText[i]
      
    }else if (i%2 === 0){
      even += encryptedText[i]
      
    }    
  } 
      encryptedText = even + odd
    odd = ''
    even = ''
    
  }

return encryptedText
}

//Best practice:

function encrypt(text, n) {
    console.log(text, n);
    if (!text || n <= 0) return text; 
    while (n--) {
      let ans = '';
      for (let i = 1; i < text.length; i += 2) {
        ans += text[i];
      }
      for (let i = 0; i < text.length; i += 2) {
        ans += text[i];
      }
      text = ans;
    }
    return text;
  }
  
  function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    const ans = new Array(encryptedText.length);
    while (n--) {
      let j = 0;
      for (let i = 1; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      for (let i = 0; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      encryptedText = ans.join('');
    }
    return encryptedText;
  }