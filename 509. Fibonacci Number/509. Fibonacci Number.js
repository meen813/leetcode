/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let cache = {}; // Create cache object to store results

    function dynamicFib(n) {
        if (n in cache) { // 캐시에 이미 값이 있다면 캐시된 값 반환
            return cache[n];
        } else {
            if (n < 2) { // n이 0 또는 1인 경우에는 그대로 반환
                return n;
            } else {
                // F(n) = F(n - 1) + F(n - 2)의 값을 캐시에 저장하고 반환
                cache[n] = dynamicFib(n - 1) + dynamicFib(n - 2);
                return cache[n];
            }
        }
    }

    return dynamicFib(n); // 계산된 피보나치 수열 값 반환
};