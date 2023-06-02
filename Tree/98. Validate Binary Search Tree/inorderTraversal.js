var isValidBST = function(root) {
    let prev = null;
    function inorderTraversal(node) {
        if (node === null) {
            return true;
        }
        if (!inorderTraversal(node.left)) {
            return false;
        }
        if (prev !== null && node.val <= prev) {
            return false;
        }
        prev = node.val;
        return inorderTraversal(node.right);
    }
    return inorderTraversal(root);
};
