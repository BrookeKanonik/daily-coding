//Instructions:

/*
Complete the function which converts hex number (given as a string) to a decimal number.
*/

//Initial code (works and best practice):

function hexToDec(hexString){
    //hex numbers have a base of 16
    return parseInt(hexString, 16)
}