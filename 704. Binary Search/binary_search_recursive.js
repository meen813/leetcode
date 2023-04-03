function binarySearchRecursive(nums, left, right, target) {
    if (left > right) {
        return -1;
    }

    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
        return middle;
    } else if (nums[middle] < target) {
        return binarySearchRecursive(nums, middle + 1, right, target);
    } else {
        return binarySearchRecursive(nums, left, middle - 1, target);
    }
}