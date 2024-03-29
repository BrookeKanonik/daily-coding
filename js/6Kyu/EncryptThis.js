//Instructions:

/*
Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

//Initial code (works, need to rewrite neater):

var encryptThis = function(text) {
    let final = []
    text = text.split(' ') //text is now array of each word 
    for (let i=0; i <text.length; i++){
      let eachWord = ''
      let last = text[i].length-1
      for (let j= 0; j< text[i].length; j++){
        if (j === 0) {
          eachWord += text[i][j].charCodeAt()
        } else if (j === 1 && j !== text[i].length-1){
          eachWord += text[i][last]
        } else {
          if (j !== text[i].length-1){
            eachWord += text[i][j]
          }
        }
        if (j === text[i].length-1){
           if (text[i].length > 1) {
               eachWord += text[i][1]
             }
           final.push(eachWord)
        }
      }
    }
    return final.join(' ')
  }

//With Regex:

const encryptThis = text => text
  .split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');


//Without:

const encryptWord = w => {
    const first = w.charCodeAt(0);
    let res;
    switch (w.length) {
      case 0: return '';
      case 1: return first;
      case 2: res = [first, w[1]]; break;
      case 3: res = [first, w[2], w[1]]; break;
      default: res = [first, w.slice(-1), w.slice(2,-1), w[1]]; break;
    }
    return res.join('');
  };
  
  const encryptThis = text => text.split(' ').map(encryptWord).join(' ');