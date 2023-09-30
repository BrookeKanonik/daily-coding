//Instructions:
/*
Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
*/

//Initial code (works):

function gooseFilter (birds) { //we are getting an array of birds, geese and more!
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]; 
    //step 1: we will be returning a filtered list
    //step 2: we will need to make sure for each element of birds it does not include an element of geese
    return birds.filter(element => {
      let count = 0
    for (let i=0; i< geese.length; i++){
      if (element === geese[i]){
        count ++
      }
    }
    if (count === 0){
      return element
    }
    } )
  };
  
  //need to return an array with geese filtered out of it
  //example: ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"] ==> ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

//Best practice:

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b));
  };
