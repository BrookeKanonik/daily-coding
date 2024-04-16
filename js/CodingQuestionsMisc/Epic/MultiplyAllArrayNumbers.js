//Instructions:

/*
Multiply all numbers in an array using recursion
*/

//Initial code (works):

function multiply(arr) {
    if (arr.length <=0){
        return 1
    }
    return arr[arr.length-1] * multiply(arr.slice(0, arr.length-1))
}