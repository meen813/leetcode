// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
//buy low sell high
//if prices drops gradually then you cannot make any profit. Therefore, return 0.
//if that is not the case, find the two numbers where the difference is the biggest.
    var diff = [];
    for(let i = prices.length-1; i >= 0; i--){
        for(let j = i-1; j >= 0; j--){
            if(prices[i]>prices[j]){
                diff.push(prices[i]-prices[j])
            }
        }
    }
    let max = diff[0];
    for(let i = 1; i < diff.length; i++){
        if(diff[i]>diff[0]){
            max = diff[i];
        }
    }
    return max;
};



// 1st optimization

var maxProfit2 = function (prices){
    let max = 0;
    for(let i = prices.length-1; i >= 0; i--){
        for(let j = i-1; j >= 0; j--){
            const profit = prices[i] - prices[j];
            if(profit > 0 && profit > max){
                max = profit;
            }
        }
    }
    return max;
};

console.log(maxProfit2([7,1,5,3,6,4]))

//O(n) optimization

var maxProfit3 = function(prices){
    let min = Infinity;
    let max = 0;
    for(i = 0; i < prices.length; i++){
        if(min > prices[i]){
            min = prices[i];
        }else if(prices[i] - min > max){
            max = prices[i] - min;
        }
        
    }
    return max;
}

console.log(maxProfit3([7,1,5,3,6,4]))