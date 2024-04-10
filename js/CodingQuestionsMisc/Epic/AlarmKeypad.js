//Instructions:

/*
There is an alarm keypad that has faulty buttons, so the keypad has to accept some incorrect codes, so long as the code contains digits which are in the correct code, in the correct order. For example, if the correct code is "13654", the keypad should accept "13", "165", and "354". Write a program that accepts an input code and determines if it should be accepted or rejected.
*/

//Initial code:

function checkCode(correctCode,inputCode){
    //If given a string
    //Check if one number, two number, no numbers
    if (inputCode.length === 0) {
        return false 
    }else if (inputCode.length === 1) { 
        return correctCode.includes(inputCode) ? true : false;
    }else {
        let pointerOne = correctCode.indexOf(inputCode[0]);
        let pointerTwo;
        for (let i = 1; i < inputCode.length; i++){     
            pointerTwo = correctCode.indexOf(inputCode[i])
            if (pointerTwo < pointerOne || pointerOne === -1){
                return false
            }
            pointerOne = pointerTwo
        }
    }
    return true
}

//works with unique numbers 

//remove items from a list/array???? filter???? for non unique numbers
//go to the first digit and see if there is the other digit after it. us lastIndexOf???