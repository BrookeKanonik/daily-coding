//Instructions:

You are given an array of 6-faced dice. Each die is represented by its face up.

Calculate the minimum number of rotations needed to make all faces the same.

1 will require one rotation to have 2, 3, 4 and 5 face up, but would require two rotations to make it the face 6, as 6 is the opposite side of 1.

The opposite side of 2 is 5 and 3 is 4.

Examples
dice = {1, 1, 1, 1, 1, 6} --> 2:
rotate 6 twice to get 1

dice = {1, 2, 3} --> 2:
2 rotations are needed to make all faces either 1, 2, or 3

dice = {3, 3, 3} --> 0:
all faces are already identical

dice = {1, 6, 2, 3} --> 3:
rotate 1, 6 and 3 once to make them all 2

//Initial code (does not work, but initial thought process)
function rotations(dieArray){ //taking in a die array all with different numbers
//example is {1,1,1,1,1,6} where we will rotate 6 twice to get 1 since it is the opposite.
  //maybe check if it is the same number, if not check if it is not an opposite side, then check if it is an opposite side
  let num = 0
  let returning = 0
  let counting = 0
  let curr = dieArray[0]
while (counting < dieArray.length ){
  for (let i = 1; i < dieArray.length; i++){ //go through all of them BUT need to reconsider what to do if we start at another number
    if (dieArray[i] !== curr && (curr === 1 || curr === 2 || curr === 3 )){ //if it isnt equal to the first and 
        if (dieArray[i] === 1 || dieArray[i] === 2 || dieArray[i] === 3){
          num ++ //not on opposite sides 
        } else {
          num += 2
        }
    } else if (dieArray[i] !== curr && (curr === 4 || curr === 5 || curr === 6 )){ 
        if (dieArray[i] === 4 || dieArray[i] === 5 || dieArray[i] === 6){
          num ++ //not on opposite sides 
        } else {
          num += 2
        }
    
  }
    
}
  if (returning > num){
    returning = num //set the value for what we plan to return
    num = 0 //reinitialize the num
  }
  counting ++
  }
  return returning
  }
//want to return the minimum amount of rotations to ensure all dies have the same side, we will need to run through this n * n to confirm we have the smallest amount?

//Best practices:

const rotations = arr =>
    Math.min(...arr
             .map( el => 
                  arr.reduce( (acc, e)=> acc + (el !== e ) + ( el === 7 - e), 0 )
                 )
            )^0