/**
 * D4dswfinition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1;
        let right = n;
        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            if (isBadVersion(middle) === true) {
                if (isBadVersion(middle - 1) === false) {
                    return middle;
                } else {
                    right = middle - 1
                }
            } else if (isBadVersion(middle) === false) {
                left = middle + 1

            }
        };
    };
}