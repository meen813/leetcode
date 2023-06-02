var isBalanced = function (root) {
    // If the tree is empty, we can say it’s balanced...
    if (root == null) return true;
    // Height Function will return -1, when it’s an unbalanced tree...
    if (Height(root) == -1) return false;
    return true;
}
// Create a function to return the “height” of a current subtree using recursion...
var Height = function (root) {
    // Base case...
    if (root == null) return 0;
    // Height of left subtree...
    let leftHeight = Height(root.left);
    // Height of height subtree...
    let rightHight = Height(root.right);
    // In case of left subtree or right subtree unbalanced, return -1...
    if (leftHeight == -1 || rightHight == -1) return -1;
    // If their heights differ by more than ‘1’, return -1...
    if (Math.abs(leftHeight - rightHight) > 1) return -1;
    // Otherwise, return the height of this subtree as max(leftHeight, rightHight) + 1...
    return Math.max(leftHeight, rightHight) + 1;
}





var isBalanced = function(root) {
    // Get the height of the tree using getHeight function
    // If the height of the tree is not -1, the tree is balanced
    if(getHeight(root) !== -1) {
        return true;
    }
    // Otherwise, the tree is unbalanced
    return false;
};

const getHeight = (root) => {
    // If the node is null, return 0
    if (!root) {
        return 0;
    }

    // Get the height of the left subtree recursively
    const leftHeight = getHeight(root.left);
    // If the left subtree is unbalanced, return -1
    if (leftHeight === -1) {
        return -1;
    }

    // Get the height of the right subtree recursively
    const rightHeight = getHeight(root.right);
    // If the right subtree is unbalanced, return -1
    if (rightHeight === -1) {
        return -1;
    }

    // Check if the difference between the left and right subtree heights is not greater than 1
    // If it's true, return the maximum height of the left and right subtrees plus 1
    // If it's false, return -1 to indicate that the tree is unbalanced
    return Math.abs(leftHeight - rightHeight) <= 1
        ? Math.max(leftHeight, rightHeight) + 1
        : -1;
};

