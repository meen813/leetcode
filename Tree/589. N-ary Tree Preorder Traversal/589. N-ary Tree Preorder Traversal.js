/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

//  Example 1:
//  Input: root = [1,null,3,2,4,null,5,6]
//  Output: [1,3,5,6,2,4]

//  Example 2:
//  Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
//  Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    if (!root) {
        return [];
    }
    let list = [root.val]
    if (root.children) {
        for (let child of root.children) {
            list = list.concat(preorder(child))
        }
    }
    return list;
};