//Instructions:

/*
Return the factorial of a number 
*/

//Initial code (with recursion)

function factorial(num){
    if (num===1){
        return 1
    }else{
        return num * factorial(num-1)
    }
}

//Initial code (without recursion):

function factorial(num){
    let total = 1
    for (let i=1; i<= num; i++){
        total *= i
    }
    return total
}