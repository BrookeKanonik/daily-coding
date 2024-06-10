//Instructions:

/*
A large package can hold 5 items, while a small package can hold only 1 item. The available number of both small and large packages is limited. All items must be placed in packages and used packages can have empty space left.

Write a function that calculates the minimum number of packages needed to hold a give number of items. If it is not possible, return -1 

For example, if we have 13 items, 3 large and 10 small packages, the function should return 3 (3 large packages)
*/

//Initial code (works but exceeds runtime):

function minimalNumberofPackages(items, availableLargePackages, availableSmallPackages){
    //let large = 5
    //let min = 1 NEVER USED
    let totalPacks = 0
    let curr = items
    for (let i=0; i <availableLargePackages; i++){
        curr = curr - 5
        totalPacks += 1
        if (curr <= 0){
            return totalPacks
        }
    }

    for (let i=0; i <availableSmallPackages; i++){
        curr = curr - 1
        totalPacks += 1
        if (curr <= 0){
            return totalPacks
        }
    }
    return -1
}

console.log(minimalNumberofPackages(13,3,10))

//New code:

function minimalNumberofPackages(items, availableLargePackages, availableSmallPackages){

    let totalPacks = 0
    let curr = items
    
    if (availableLargePackages * 5 < items){ //check if we can fill all the large boxes first, and if there is still more....
        totalPacks = availableLargePackages // as we have used them all
        curr = curr - (availableLargePackages * 5 ) //update our current amount left
        if (curr > availableSmallPackages){ //if we have more items than boxes return 1
            return -1
        }else { //else, just put everything else in its own box
            totalPacks += curr 
            return totalPacks
        }
    }else { //if we fit everything in the large boxes...
        return Math.round(items/5)
    }
}
console.log(minimalNumberofPackages(15,3,10))