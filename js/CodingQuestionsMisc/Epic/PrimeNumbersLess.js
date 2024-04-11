//Instructions:

/*
Given an integer M, return all prime numbers smaller than M.
*/

//Initial code: 

function allPrimes(num){
    let primes = []
    if (num > 2){
        primes.push(2)
        for (let i=3; i<num; i++){ //2 is first prime number so we start there
            //another loop to go over primes 
            // console.log('i', i)
            for (let j = 0; j < primes.length; j++){
                // console.log('j', j)
                if ((!i % primes[j] === 0) && j === primes.length -1){ //if it went through the entire primes
                    primes.push(i)
                    break;
                }
                if (i % primes[j] === 0){
                    break; //get out if its not prime
                }
            }
            
        }
    }
    return primes
}

//to find if something is prime too, going through numbers that are less than or half the value