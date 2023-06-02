/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function (word1, word2) {
    const maxLength = Math.max(word1.length, word2.length);

    let merged = ""
    for (let i = 0; i < maxLength; i++) {
        if(i < word1.length){
            merged += word1[i];
        }
        if(i < word2.length){
            merged += word2[i];
        }
    }
    return merged;
};