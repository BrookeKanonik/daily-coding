//Initial code:


//covert input into charCodes and store into variable
//set total 1 to a reduced sum of character codes
//covert 7s to 1s in charCodes, then set total 2 to reduced sum
//subtract difference and return

function sum(arr){
    return arr.reduce((acc,cur) => acc + Number(cur),0)
}

function convertNums (str){
    let charCodes = str.split('').map(char => char.charCodeAt(0)).join('')
    const total1 = sum(charCodes.split(''));
    const total2 = sum(charCodes.split('').map(num => num == 7 ? 1 : num))
    return total1 - total2
}

console.log(convertNums('abcdef'))

function calc(str){
    return[...str].map(e => e.charCodeAt(0)).join('').split('').filter(n=> n == '7').length * 6
}

console.log(calc('abcdef'))