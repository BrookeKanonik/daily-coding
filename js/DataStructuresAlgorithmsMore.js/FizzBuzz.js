//Instructions:

/*
Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “FizzBuzz”.
*/

//Initial code, notes, and more:

//Parameters will be a single number that we have to loop to. Will be greater than or equal to 1.
//Results: If divisible by 3, then Fizz, by 5 then Buzz, if 15 then FizzBuzz printed to the console. We will also print the other numbers if it is not divisible by them 
//Example: 15 itself --> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

//3n is the time complexity or O(3n)
function fizzBuzz (n) { //taking in a number that is positive and greater than 0 
    let string = '' //declaring a string to add Fizz, Buzz or i depending on if i is divisible by 3,5 or neither
    for (let i=1; i <=n; i++){
        string = '' // set as a blank string each time we go through the loop 
        if (i % 3 === 0){ //needs to be first because if 5 was, then it may print BuzzFizz
            string += 'Fizz'
        }
        if (i % 5 === 0){
            string += 'Buzz'
        }
        if (string === ''){ //our default if it isnt divisible by 5 or 3
            string += `${i}`
        }
    console.log(string) //console.log the string each time
    }
}

//going through each number = n, three if conditions ===> 3 * n this it is O(3n)