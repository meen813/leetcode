function longestPalindrome(words) {
    let unpaird = 0;
    let map = new Map();
    let ans = 0;

    for(let word of words) {
        if(!map[word]) {
            map.set(word, 0);
        }
    }
}