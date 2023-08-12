//Instructions:

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

//Initial code (works):

//parameters are letters that can be capital or not in the form of a string. need to make it an array.

function duplicateCount(text){
    let organized = text.toLowerCase().split('').sort() //to take into account capitals, we will need to make them all lowercase. 
    let current = organized[0] //setting the first item as the current one 
    let count = 0  //need a count for each new duplicated letter 
    for (let i = 1; i < organized.length; i++){
  
      if (current === organized[i] && organized[i+1] !== current){   //expecting to only get 1 back for indivisibility, so need to ensure we are not just counting the same letters together 
        count ++
      }
      current = organized[i] 
    }  
    return count //expecting a return value of the count 
  }
  
//Best practices:

function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }

  function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }

  // Dummy code:

function findX (arr){
    let result = []
    for (let i = 0; i<arr.length; i++){
        if (arr[i].includes('x')){
            result.push(`${i}, ${arr[i].indexOf('x')}`)
        }
        if (result.length !== 1){
            return []
        }else {
            return result
        }
    }
}

findX ([['x', 'o', 'o'],['o', 'x','o'] ])
findX ([['o', 'o', 'o'],['o', 'x','o'] ])
findX ([[] ])