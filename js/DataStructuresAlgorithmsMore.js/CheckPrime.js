//Instructions:

/* Write an algorithm to determine if a number is prime or not*/
/* x will always be a positive number*/
//Initial code:

function checkIfPrime(x){
    let stored = []
    if (x=== 0 || x=== 1 || x === 2){
        return true
    }else{
        stored.push(2)
        for (let i=3; i<=x; i++){
            for (let j=0; j<stored.length; j++){
                if (i % stored[j] === 0 && i===x){
                    return false
                }else{ //check if it is the last in the array
                    if (j === stored.length-1){
                        stored.push(i)
                        break;
                    }
                }
            }
        }
    }
    return true;
}