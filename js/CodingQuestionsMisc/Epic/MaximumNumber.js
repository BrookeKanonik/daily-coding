//Instructions:

/*
Given a list of integers, write a function that returns the maximum number in the list. If the list is empty, return None.
*/

//Initial code (works):

function highestNum(listNums){
    let currMax = listNums[0];
    if (listNums.length === 0){
        return 'None'
    }
    for (let i=1; i<listNums.length; i++){
        if (listNums[i] > currMax){
            currMax = listNums[i]
        }
    }
    return currMax;
}

