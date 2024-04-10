//Instructions:

/*
Reverse a string both using recursion and not using recursion. What are the advantages of each?
*/

//Without recursion:

function reverseString(str){
    let newStr = ''
    for (let i =str.length-1; i >= 0; i--){
        newStr += str[i]
    }
    return newStr
}

//With recursion:

function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}
