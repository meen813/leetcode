// Recursion
function invertTree(root) {
    if (root == null) return root;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
}


// Runtime: 64 ms, faster than 92.88% of JavaScript online submissions for Invert Binary Tree.
var invertTree = function(root) {
    // Base case...
    if(root == null){
        return root
    }
    const curr = root.left
    root.left = root.right
    root.right = curr
    // Call the function recursively for the left subtree...
    invertTree(root.left)
    // Call the function recursively for the right subtree...
    invertTree(root.right)
    // swapping process...

    return root         // Return the root...   
};


// DFS
function invertTree(root) {
    const stack = [root];

    while (stack.length) {
        const n = stack.pop();
        if (n != null) {
            [n.left, n.right] = [n.right, n.left];
            stack.push(n.left, n.right);
        }
    }

    return root;
}

// BFS
function invertTree(root) {
    const queue = [root];

    while (queue.length) {
        const n = queue.shift();
        if (n != null) {
            [n.left, n.right] = [n.right, n.left];
            queue.push(n.left, n.right);
        }
    }

    return root;
}