//Instructions:

/*
Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

The method takes two parameters, the query string and the array of strings to search, and returns an array.

If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

Examples
If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].
*/

//Initial Code (works):

function wordSearch(query, seq){
    let matchedWords = []
    query = query.toLowerCase()
    for (let i=0; i<seq.length; i++){  
      if (seq[i].toLowerCase().includes(query)){
        matchedWords.push(seq[i])
      }
    }
    if (matchedWords.length < 1) matchedWords.push('Empty')
    return matchedWords
  }

//Best Practice:

function wordSearch(query, seq){
    query = query.toLowerCase()
    const arr = seq.filter(e => e.toLowerCase().includes(query))
    return arr.length ? arr : ['Empty']
  }

//My Second Attempt:

function wordSearch(query, seq){
    query = query.toLowerCase()
    seq = seq.filter (element => element.toLowerCase().includes(query))
    return seq.length < 1 ? ['Empty'] : seq
  }