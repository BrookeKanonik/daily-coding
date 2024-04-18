//Instructions:

/*
Given a string, determine which character appears the most and how many times did it appear
*/

//Initial code: 

function checkMost(str){
    let characterCheck = {} //initialize the object
    for (let i =0; i < str.length; i++){ //go through each character 
        if (characterCheck[str[i]]){ //see if it is there
            characterCheck[str[i]] += 1 //increment by one if it is there already 
        } else {
            characterCheck[str[i]] = 1;
        }
    }
    let totalValues = Object.values(characterCheck)
    let maxValue = Math.max(...totalValues)
    console.log(maxValue)
}

checkMost ('HAPPY BIRTHDAY!!!') //did not print character, just amount

const maxChar = (str)=> {
    let obj = {} //will constantly change 
    for (let char of str){
        (!obj[char]) ? obj[char] = 1 : obj[char] += 1;
    }
    let maxNum = 0;
    let maximumChar = ''

    for (let char in obj){
        if (obj[char] >= maxNum){
            maxNum = obj[char]
            maximumChar = char
        }
    }
    console.log(`The letter with the most characters (${maxNum}) is ${maximumChar}!`)
}

maxChar('turtles')