//Instructions:

/*
Description:
Remove all exclamation marks from the end of sentence.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/

//Initial code (works):

function remove (string) {  
    let finalString = string.length
    for (let i = string.length - 1; i >= 0; i--){
      if (string[i] === '!'){
        finalString -= 1
      }else{
        return string.slice(0,finalString);
      }
    }
    return string.slice(0,finalString)
  }

//Other solutions:

const remove = s => s.replace(/!+$/, '');

function remove(s)
{
    while(s && s.slice(-1) == "!") 
    { 
        s = s.slice(0,-1) 
    }
    return s;
}