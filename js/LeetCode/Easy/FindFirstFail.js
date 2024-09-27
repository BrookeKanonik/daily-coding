/* Instructions: */

/* Find the index of the first fail */

let locate = [true, true, true, true, false, false]

//find using binary search

function findFalse (locate){
    let left = 0
    let right = locate.length-1

        while(left < right){
            let mid = Math.floor((left+right)/2)
            if (locate[mid] === true){
                left = mid + 1
            } else {
                right = mid
            }
        }
    return left
}