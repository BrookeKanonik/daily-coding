//Instructions:

/*
Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

If the second string isn't a valid rotation of the first string, the method returns -1.
Examples:
"coffee", "eecoff" => 2
"eecoff", "coffee" => 4
"moose", "Moose" => -1
"isn't", "'tisn" => 2
"Esham", "Esham" => 0
"dog", "god" => -1
*/

//Initial code (works):

function shiftedDiff(first,second){ //taking in two strings and will shift them to see when (and if) they will equal the same thing
    //max amount of shifts will be the length of the string - 1, maybe a set case of when they are the same?
    let count = 0
    let last
    if (first === second){ //if they are the same return 0
      return 0 
    } else if (first.length !== second.length) { //if they arent the same length, return -1
      return -1
    } else {
      for (let i = 0; i <= first.length; i++){ //going through and moving the letters last to first (pop and then shift?)
        //last = first[first.length-1]
        last = first[first.length-1] //remove last element
        first = first.slice(0, -1) //put that to the front
        first = last + first 
        count ++ //increment the changes we made
        if (first === second){
          return count
        } 
        if (count === first.length){
          return -1
        }
      }
      return count 
    }
    
  }
  
  //output will be the number of times we need to shift for the words to be the same
  //move last to first is what we are doing
  // example: coffee ffeeco -> 4

  //Best practice:

  function shiftedDiff(first, second) {
    if (first.length != second.length) return -1
    return (second + second).indexOf(first)
  }