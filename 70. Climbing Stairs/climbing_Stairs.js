/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let cache = {};
    function stairsFib(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n <= 2) {
                return n;
            } else {
                cache[n] = stairsFib(n - 1) + stairsFib(n - 2);
                return cache[n]
            }
        }
    }
    return stairsFib(n)
};