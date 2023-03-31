var detectCycle = function (head) {
    const visited = new Set();
    let node = head;
    while (node !== null) {
        if (visited.has(node)) {
            return node;
        }
        visited.add(node);
        node = node.next;
    }
    return null;
};  