//Instructions:

/*
See if a word is a palindrome or not 
*/

//Initial code:

(function testPalindrome(str){
    let reversedStr = ''
    for (let letter of str){
        reversedStr = letter + reversedStr
    }
    console.log(reversedStr === str)
})('meghan')

//see if casing does not matter 
function testPalindromeCasing(str){
    str = str.toLowerCase()
    let reversedStr = ''
    for (let letter of str){
        reversedStr = letter + reversedStr
    }
    console.log(reversedStr === str)
}

testPalindromeCasing('Wow')