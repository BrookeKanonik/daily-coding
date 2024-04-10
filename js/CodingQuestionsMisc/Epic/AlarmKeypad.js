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
            // console.log(correctCode)
            if (i >= 2) {
                pointerOne = correctCode.indexOf(inputCode[i-1])
            }    
            pointerTwo = correctCode.indexOf(inputCode[i])
            // console.log(pointerOne, pointerTwo)
            if (pointerTwo < pointerOne || pointerOne === -1 || (pointerOne === pointerTwo && correctCode.indexOf(inputCode[i]) === correctCode.lastIndexOf(inputCode[i]))){
                return false
            }
            if (pointerOne === pointerTwo){
                correctCode = correctCode.slice(pointerTwo + 1)
            } else {
                correctCode = correctCode.slice(pointerTwo)
            }
        }
    }
    return true
}

//need to add something to check on repeating digits not looking at same number 