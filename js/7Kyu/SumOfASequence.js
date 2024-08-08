//Instructions:

/*
Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
This is the first kata in the series:

Sum of a sequence (this kata)
Sum of a Sequence [Hard-Core Version]
*/

//Initial code (works and best practice):

const sequenceSum = (begin, end, step) => {
    //int of beginning where we start, int of end where we should stop, int of step which is how much we should add after the initial start 
    //1,5,3 => 1 + 4 = 5
    let total = 0
    for (let i= begin; i <= end; i+=step){
      total += i
    }
    return total; 
  };
  
  //if end is bigger than begin, return 0
  //if end < current amount, then do not add it to the total ex 1,5,3. do not add 7 as it is higher than 5
  