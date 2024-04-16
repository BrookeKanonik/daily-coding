//Instructions:

/*
Write recursion for placing the range of start and end numbers in an array
*/

//Initial code:

function rangeOfNum (start,end){
    if (end < start ) {
        return []
    } else {
        const numbers = rangeOfNum(start, end - 1) 
        numbers.push(end)
        return numbers;
    }    
}