//Instructions:
/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

//Initial code (works):

function isIsogram(str){
    let check = new Set(str.toLowerCase())
    if (check.size === str.length){
      return true
    } else {
      return false
    }
  }

//Best practice:

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}