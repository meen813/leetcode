var moveZeroes = function(nums) {
    let nonZeroes = 0;

    for(let i = 0; i < nums.length; i++){
        //check if current i is not 0, then move it to current zero.
        if(nums[i] !== 0){
            nums[nonZeroes] = nums[i];
            nonZeroes++
        } 
    }
        for(let i = nonZeroes; i<nums.length; i++){
            nums[i] = 0;
        }
    return nums;

};