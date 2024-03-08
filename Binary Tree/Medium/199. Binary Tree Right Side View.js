// 1
var rightSideView = function(root) {
    const isBaseCase = root === null;
    if (isBaseCase) return [];

    return bfs([ root ]);
};

const bfs = (queue) => {
    const rightSideArr = [];
    
    while (queue.length) {
        rightSideArr.push(queue[queue.length -1].val);

        for (let i = queue.length - 1; i >= 0; i--) {
            const node = queue.shift();

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return rightSideArr;
}

// 2
var rightSideView = function(root, level = 0, rightSide = []) {
    const isBaseCase = root === null;
    if (isBaseCase) return rightSide;

    const isLastNode = level === rightSide.length;
    if (isLastNode) rightSide.push(root.val);

    return dfs(root, level, rightSide);
}

const dfs = (root, level, rightSide) => {
    if (root.right) rightSideView(root.right, (level+1), rightSide);
    if (root.left) rightSideView(root.left, (level+1), rightSide);

    return rightSide;
}