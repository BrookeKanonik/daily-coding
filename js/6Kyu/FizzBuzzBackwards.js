//Instructions:

/*
Traditionally in FizzBuzz, multiples of 3 are replaced by "Fizz" and multiples of 5 are replaced by "Buzz". But we could also play FizzBuzz with any other integer pair [n, m] whose multiples are replaced with Fizz and Buzz.

For a sequence of numbers, Fizzes, Buzzes and FizzBuzzes, find the numbers whose multiples are being replaced by Fizz and Buzz. Return them as an array [n, m]

The Fizz and Buzz numbers will always be integers between 1 and 50, and the sequence will have a maximum length of 100. The Fizz and Buzz numbers might be equal, and might be equal to 1.

Examples
Classic FizzBuzz; multiples of 3 are replaced by Fizz, multiples of 5 are replaced by Buzz:
[1, 2, "Fizz", 4, "Buzz", 6]  ==>  [3, 5] 
Multiples of 2 are replaced by Fizz, multiples of 3 are replaced by Buzz:
[1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz"]  ==>  [2, 3]
Multiples of 2 are replaced by Fizz and Buzz:
[1, "FizzBuzz", 3, "FizzBuzz", 5, "FizzBuzz"]  ==>  [2, 2]
Fizz = 1, Buzz = 6:
["Fizz", "Fizz", "Fizz", "Fizz", "Fizz", "FizzBuzz"]  ==>  [1, 6]
*/

//Initial Code (worked for majority of cases):

function reverseFizzBuzz(array) { //take in an array of numbers and strings based on the fizzbuzz problem
    //numbers taken in will never be written as a string 
    //should not have to worry about the array being empty 
    //it is possible it will not be a "correct array" meaning where 1 would go Fizz may be 
    //find where fizz and buzz first occur in the array (and add 1 to that since indexing starts at 0). If there is no Buzz, just FizzBuzz, FizzBuzz is the buzz. If there is just FizzBuzz, take into account the first time that appears in the array.
    //have a for loop, and do a .includes for Fizz. If it is FizzBuzz, then return that number and itself. If it is Fizz, find what contains Buzz next.
    let finalArr = []
    for (let i = 0; i < array.length; i++){
      if (String(array[i]).includes('Fizz') && (!finalArr.length >= 1)) {
        finalArr.push(i + 1)
        //need to convert the array to a string if we are to use the .includes
      }
      if (String(array[i]).includes ('Buzz') && (finalArr.length === 1)){
        finalArr.push(i + 1)
        return finalArr; //break needed as we do not need to loop anymore
      }
    }
     if (finalArr.length === 1){
      finalArr.push(finalArr[0])
      return finalArr
    }
  }
  //can create a new array to return this information in 

  //Best practice:

  function reverseFizzBuzz(array) {
    var fizz = (array.indexOf("Fizz") + 1) ? array.indexOf("Fizz") + 1 : array.indexOf("FizzBuzz")+1;
    var buzz = (array.indexOf("Buzz") + 1) ? array.indexOf("Buzz") + 1 : array.indexOf("FizzBuzz")+1;
  
  return [fizz,buzz];
  
  };
