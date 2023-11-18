//Instructions:

/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity
*/

function capitalize(s){ //taking in a string that is lowercase with no spaces, no other funny business
    //.map can only be used with arrays, remember that we are taking in a STRING so this can be one method to use
    let firstString = s.split('').map((element, index) => index % 2 === 0 ? element.toUpperCase() : element ).join('')
    let secondString = s.split('').map((element, index) => index % 2 ? element.toUpperCase(): element ).join('')
    //can either approach a .map twice being set equal to the strings or do two for loops concating the letters to the string value 
    
    return [firstString, secondString];
  };
  
  //output is going to be an array with the first value being even indexes capitalized followed by odd indexes capitalized
  //example of one will be "apples" --> ['ApPlEs', 'aPpLeS']

  function capitalize(s){ //taking in a string that is lowercase with no spaces, no other funny business
    //.map can only be used with arrays, remember that we are taking in a STRING so this can be one method to use
    let firstString = '' //this method will add letters based on their index instead of mapping 
    let secondString = ''
    
    for (let i = 0; i <s.length; i++){ //we can combine both of the operations in one loop
      if(i%2===0){
        firstString += s[i].toUpperCase()
        secondString += s[i]
      }else{
        firstString +=s[i]
        secondString += s[i].toUpperCase()     
      }
    } 
    
    return [firstString, secondString];
  };
  
  //output is going to be an array with the first value being even indexes capitalized followed by odd indexes capitalized
  //example of one will be "apples" --> ['ApPlEs', 'aPpLeS']

  //"Best practice" is first method but in reality is a lot slower