/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    //case of a node to be a descendant of itself
    if (root === p || root === q) {
        return root;
    }
    if ((p.val < root.val && root.val < q.val) || (q.val < root.val && root.val < p.val)) {
        return root;
    } else {
        if (p.val < root.val && q.val < root.val) {
            root = root.left;
            return lowestCommonAncestor(root, p, q);
        }
        if (root.val < p.val && root.val < q.val) {
            root = root.right;
            return lowestCommonAncestor(root, p, q);
        }
    }

};


