//Instructions:

/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

//Initial thoughts:

var maxSequence = function(arr){

    let total1= arr[0]
    let total2 = arr[0]
    if (Math.max(...arr) < 0 || arr.length === 0){
      return 0
    }else {
        for (let i = 1; i <arr.length; i++){
          console.log(total1,total2)
          if (total2 + arr[i] > total2){
            total2 += arr[i]
           // total1 += arr[i]
          } else {
            if (total1 < total2){
              total1 = total2
            }
            total2 = 0
          }
        }
      return total1 > total2 ? total1 : total2
    }
  
  }