// #1 DFS
var dfs = function(root) {
    let leftRoot = root.left ? dfs(root.left) + 1 : 0;
    let rightRoot = root.right ? dfs(root.right) + 1 : 0;

    return Math.max(leftRoot, rightRoot);
};

var maxDepth = function(root) {
    let length = dfs(root);
    return length + 1;
}

// #2 BFS
var bfs = function(stack, height = 0) {
    while (stack.length) {
        let [root, depth] = stack.pop();

        height = Math.max(height, depth);

        if (root.left) stack.push([root.left, depth +1])
        if (root.right) stack.push([root.right, depth +1])
    }

    return height
};

var maxDepth = function(root) {
    const isBaseCase = root === null;
    if (isBaseCase) return 0;

    return bfs([[root, 1]]);
}