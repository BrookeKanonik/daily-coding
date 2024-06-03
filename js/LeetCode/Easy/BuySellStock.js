//Instructions:

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

//Initial code (works but time limit exceeded):
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //want to loop through and determine if it is increasing/decreasing. if it is all decreasing, we return 0
    // let profit = 0
    // let currSmall=0
    // let currLarge = 0
    // for (let i=0; i<prices.length -1; i++){ //not going to go straight to the last item
    //     if (prices[i] < prices[i+1] && currSmall > prices[i]){
    //         //see if the current amount is smaller
    //         currSmall = prices[i]
    //     }
    //     if (prices[i+1] > currLarge && currLarge !== prices[i+1] && currLarge !== currSmall &&){
    //         currLarge = prices[i+1]
    //     }
    //     //also need to check location and make sure large is not behind smallest 
    // }
    //double for loop?
    let profit = 0;
    for (let i=0; i <prices.length-1; i++){
        for (let j=1+i; j<prices.length; j++){
            if (prices[j] > prices[i] && prices[j]-prices[i] > profit){ //NEED TO DO J > I
                profit = prices[j] - prices[i]
            }
        }
    }
    return profit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let highestOverall = 0; //dec as num
    for (let i=0; i <prices.length-1; i++){
        if (i === 0 || highestOverall - prices[i] > profit){ //seeing if it is either the first to store the highest or if there is a new profit to do second loop
        for (let j=1+i; j<prices.length; j++){
            if (i===0){
                 //if we are looping through the first 
                if (prices[j] > highestOverall){
                    highestOverall = prices[j] //marking the highest after the initial //5
                }
            }
            if (prices[j] > prices[i] && prices[j]-prices[i] > profit){
                profit = prices[j] - prices[i]
            }
        }
    }
    
};
return profit
}
//dont loop through if highest - current is not bigger than currHighest? 

//Best practice:

