//Instructions:
/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

//Initial code (works and best practice):

//Parameters: a string consisting of an individuals name (first and last with a space inbetween)
function nameShuffler(str){
    return str.split(' ').reverse().join(' ') //we will need to return a string where we have switched the first and last name. to do so, we will need to split the name on the " " between the first and last name. then, we will need to use the reverse() method to switch the order. finally, we need to join our array on the ' ' we originally split on.
  }
//Result: needs to be the name but in the reverse order (we will need the reverse method in our code)
//Example: 'Brooke Kanonik' will become 'Kanonik Brooke'