/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
    // Initialize a variable to keep track of the answer.
    let ans = 0;
    // Create a 2D array to store the count of each pair of characters.
    const counter = Array.from({ length: 26 }, () => Array.from({ length: 26 }, () => 0));

    for (let i = 0; i < words.length; i++) {
        const w = words[i];
        // Get the ASCII value of the first character of the word.
        const a = w.charCodeAt(0) - 'a'.charCodeAt(0);
        // Get the ASCII value of the second character of the word.
        const b = w.charCodeAt(1) - 'a'.charCodeAt(0);
        if (counter[b][a]) {
            ans += 4;
            counter[b][a]--;
        } else {
            counter[a][b]++;
        }
    }
    
    for (let i = 0; i < 26; i++) {
        if (counter[i][i]) {
            ans += 2;
            break;
        }
    }
    // Return the final answer.
    return ans;
};
