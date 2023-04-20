/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    // Create an array to store the minimum cost to reach each step
    const dp = new Array(cost.length + 1);
    dp[0] = 0; // Cost to reach step 0 is 0
    dp[1] = 0; // Cost to reach step 1 is 0

    // Loop through the steps and calculate the minimum cost to reach each step
    for (let i = 2; i <= cost.length; i++) {
        // Minimum cost to reach step i is the minimum of cost to reach step i-1 or i-2, plus the cost of current step
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    // Return the minimum cost to reach the top, which is the last element in the dp array
    return dp[cost.length];
};
