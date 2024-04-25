//Bubble Sort:

function bubbleSort(arr){
    for (let i =0; i <arr.length; i++){
      for (let j=0; j<arr.length -1 -i; j++){
        if (arr[j] > arr[j+1]){
          const tmp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = tmp
        }
      }
    }
    return arr
  }

  //worst case is O(n^2) best time complexity would be O(n) if it is already sorted
  //space complexity worst is O(1)