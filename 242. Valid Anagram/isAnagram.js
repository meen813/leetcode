/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sMap = new Map();
    let counter = 0;

    for (let i = 0; i < s.length; i++) {
        if (sMap.has(s[i])) {
            sMap.set(s[i], sMap.get(s[i]) + 1)
            counter++;
        } else {
            sMap.set(s[i], 1)
            counter++;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!sMap.has(t[i]) || sMap.get(t[i]) <= 0) {
            return false;
        } else {
            sMap.set(t[i], sMap.get(t[i]) - 1)
            counter--
        }
    }
    return counter === 0;
};

const s = "anagram"
const t = "nagaram"
console.log(isAnagram(s, t)) // true


// time = O(2N)
// space = O(N)