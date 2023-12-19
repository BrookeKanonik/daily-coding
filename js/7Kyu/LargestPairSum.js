//Instructions:

/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/

//Initial code (works):

function largestPairSum (numbers) { //sorting, you can also set values to variables and compare 
    numbers = numbers.sort((a,b)=> a-b)
    return numbers[numbers.length-1] + numbers[numbers.length-2]
  }

//Or...

function largestPairSum(numbers){
    numbers.sort(function(a, b){ return b - a });
    return numbers[0] + numbers[1];
  }

// Optimal way we came up with

function largestPairSum (numbers) { //sorting, you can also set values to variables and compare [2,11,14,4,5]
    let first;
    let second;


    for (let i = 0; i < numbers.length; i++){
        if (second === undefined || numbers[i] > second){
            if (first === undefined || numbers[i] > first){
                second = first
                first = numbers[i]               
            }else {
                second = numbers[i]
            }
        }
    }
    return first + second
}
