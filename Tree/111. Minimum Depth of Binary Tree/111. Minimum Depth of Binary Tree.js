/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    //base case
    if (!root) {
        return 0;
    }

    let left = minDepth(root.left);
    let right = minDepth(root.right);

    //If at least one of the children is 0
    if (left === 0 || right === 0) {
        return Math.max(left, right) + 1
    }
    //if two children of node are 
    return Math.min(left, right) + 1;
};