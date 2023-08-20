//Instructions:

/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

//Initial code (works) and is effecient on run time:

function findShort(s){
    let arrayS = s.split(' ') 
    let compare = arrayS[0]
    
    for (let i=1; i < arrayS.length; i++){
      if (compare.length > arrayS[i].length){      
        compare = arrayS[i]    
      }      
  }  
    return compare.length  
  }

//Best practices:

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}

//Fun ways to solve:

function findShort(s){
    let newArr = s.split(' ').sort((a,b) => a.length - b.length)
    return newArr[0].length
}
