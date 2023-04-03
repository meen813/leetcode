var levelOrder = function(root) {
    if(!root) {
        return [];
    }
    let currentNode = root;
    let result = [];
    let queue = [];

    queue.push(currentNode);

    while(queue.length > 0) {
        let size = queue.length; // 현재 레벨의 노드 개수
        let level = []; // 현재 레벨의 노드 값 배열

        for(let i = 0; i < size; i++) {
            currentNode = queue.shift();
            level.push(currentNode.val);

            if(currentNode.left) {
                queue.push(currentNode.left);
            }
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        result.push(level);
    }
    return result;
};
