//Instructions:

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

//Initial code (works):

function solution(string) {

    let matching = []
    let capital = /[A-Z]/g
    for (let i=0; i < string.length; i++){
      if (string[i].match(capital)){
        matching.push(` ${string[i]}`)
      } else {
        matching.push(string[i])
      }
     
    }
  return matching.join('')
}

//Best practices and other solutions:

function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }

function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }