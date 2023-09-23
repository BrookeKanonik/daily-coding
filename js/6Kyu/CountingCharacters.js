//Instructions:
/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

//Initial thoughts:

function count(string) {
  
    let obj = {}
    string = string.split('').sort()
    console.log(string)
    for (let i = 0; i < string.length; i++){
      let count = 1
      while (string[i] === string[i+1]){
        count ++;
        i++;
      }
      obj.i = count;   
    }
    return obj
  }

// Similar to my thought process:

  function count (string) {
    var result = {};
    
    for(let i = 0; i < string.length; i++) {
      if(result.hasOwnProperty(string[i])){
        result[string[i]] += 1;
      } else {
        result[string[i]] = 1;
      }
    }
    
    return result;
  }

  //Best practice:

  function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  } 
  