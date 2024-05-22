function sortingInsert(arr){
    let stop = arr.length
    
    for (let i = 1; i < stop; i++){
        //need to loop through all previous elements to see if it is less than the element
        let currSmall = -1;
        for (let j = i-1; j >= 0; j--){
            // console.log(arr, 'this is going into the loop with an i of', i)
            if (arr[i] < arr[j]){ //if something to the left is lower than the value
                currSmall = j //0
                // console.log(arr, 'this is detecting something is less than')
                //break; //to not switch more than needed
            }
            if (j===0 && currSmall > -1){
                let temp = arr[i] //temp = 3
                arr[i] = arr[currSmall] //3 = 5
                arr[currSmall] = temp
                // console.log(arr, 'this is changing something after itt over last element')
            }
        }
    }
    return arr
}
console.log(sortingInsert([5,3,1,2,7,9]))
