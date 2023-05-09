/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {
    nums.sort((a,b) => {
        if(a.length === b.length){
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }) 
    return nums[nums.length - k];
};



console.log(kthLargestNumber(["2","21","12","1"], 1))