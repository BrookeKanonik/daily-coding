//Instructions:

/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
 

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
*/

//Initial thoughts:

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    //store the values in a has map and see if there is a value there using mod that will give us the coin amounts
    let storedAmounts = {}
    let curr = amount
    let totalCoins = 0 //counter
    let inner = 0
    //the array may not be ordered so we need that ordered
    coins = coins.sort((a,b) => b-a) //highest first
    if (amount > coins[0]){
        return -1
    }else{
    for (let i=0; i <coins.length; i++){ //go through and put them in the hash map
        storedAmounts[i] = [coins[i]]
    }
    for (let coin of storedAmounts){
        let temp = Math.floor(amount / coin)
        curr = amount % coin
        inner++
        for (let i = inner; i <coins.length; i++){
            if(curr % )
        }
    }
    return totalTimes
        }
};
