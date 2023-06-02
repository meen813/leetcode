/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (flowerbed.length < n) {
        return false;
    }

    if (n === 0) {
        return true;
    }

    let counter = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if ((i === 0 || flowerbed[i - 1] === 0) && flowerbed[i] === 0 && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1;
            counter++
            if (counter === n) {
                return true;
            }
        }
    }
    return false;
};
