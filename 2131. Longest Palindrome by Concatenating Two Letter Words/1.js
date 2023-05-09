function longestPalindrome(words) {
    let unpaird = 0;
    let map = new Map();
    let ans = 0;

    for(let word of words) {
        if(!map[word]) {
            map.set(word, 0);
        }
        if(word.charAt(0) === word.charAt(1)) {
            if(map.get(word) > 0) {
                unpaird--;
                map.set(word, map.get(w) - 1);
                ans += 4;
            } else {
                map.set(word, map.get(word) + 1);
                unpaird++;
            }
        } else {
            let
        }
    }
}