/**
 * 
 * Given two integer arrays nums1 and nums2, return an array of their intersection. 
 * Each element in the result must appear as many times as it shows in both arrays 
 * and you may return the result in any order.
 */

/**
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 */

/**
 * 
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [4,9]
 * Explanation: [9,4] is also accepted.
 */

function intersection(nums1, nums2) {

    const map = new Map();
    const result = [];

    for (const n of nums1) {
        if (map.has(n)) {
            map.set(n, map.get(n) + 1)
        } else {
            map.set(n, 1)
        }
    }

    for (const n of nums2) {
        if (map.has(n) && map.get(n) > 0) {
            map.set(n, map.get(n) - 1);
            result.push(n);
        }
    }
    return result;
}

const input1 = [1,2,2,1]
const input2 = [2,2]
console.log(intersection(input1, input2)) //[4,9]