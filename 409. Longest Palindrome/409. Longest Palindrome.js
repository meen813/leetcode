// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.


/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    var ans = 0; // create a variable to store length of palindrome
    var counter = new Map(); //creating a counter object to store characters of palindrom as key and number of its occurrence as values

    for (const char of s) {
        if (!counter.has(char)) {
            counter.set(char, 1)
        } else {
            counter.set(char, counter.get(char) + 1)
        }
    }

    for (const count of counter.values()) {
        ans += Math.floor(count / 2) * 2;
        if (ans % 2 == 0 && count % 2 == 1) {
            ans += 1;
        }
    }
    return ans;
};