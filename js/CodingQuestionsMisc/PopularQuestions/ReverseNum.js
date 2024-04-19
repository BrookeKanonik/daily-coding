//Instructions:

//Given a number, reverse it. If it is -0003, it is -3

//Initial code (first try):

function reverseNum(num){
    //want to get rid of all 0s after the number...
    num = String(num) //convert number 
    let count = 0
    let isNegative = false
    for (let i=num.length-1; i>=0; i--){       
        if (i === '0'){
            count --;
        }else{
            break; //get out if does not end in 0 or you got through all of them 
        }
    }
    if (count < 0){
        num = num.slice(0,count) //remove 0s at the end based on count
    }
    //above was to remove 0's at end... now...

    if (num[0] === '-') {
        num = num.slice(1)
        isNegative = true
    } //remove the negative

    num = num.split('').reverse().join('') //reverse the numbers
    return isNegative ? Number('-' + num) : Number(num)
}

console.log(reverseNum(500))

//Another method:

const reverseInt = num => {
    if (num < 0) return -1 * parseInt(num.toString().split('').reverse().join(''));
    return parseInt(num.toString().split('').reverse().join(''));
}

console.log(reverseInt(-903))