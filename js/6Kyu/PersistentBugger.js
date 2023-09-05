//Instructions:
/*
function persistence(num) {
    let number = String(num)
    let newNum 
    let count = 0
  if (number.length === 1){
    return 0
  } else {
      while (number.length !== 1){
     newNum =  number.split('').map((element, i) => {
     if (i!== number.length-1){
       return element + '*'
     } else {
       return element 
     }
   }).join('')
        console.log(number)
   number = String(eval(newNum))   
        count ++ 
  }
    return count
    
  }
}
*/

//Initial code (works):

function persistence(num) {
    let number = String(num)
    let newNum 
    let count = 0
  if (number.length === 1){
    return 0
  } else {
      while (number.length !== 1){
     newNum =  number.split('').map((element, i) => {
     if (i!== number.length-1){
       return element + '*'
     } else {
       return element 
     }
   }).join('')
        console.log(number)
   number = String(eval(newNum))   
        count ++ 
  }
    return count
    
  }
}

//Best practice:

function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
}