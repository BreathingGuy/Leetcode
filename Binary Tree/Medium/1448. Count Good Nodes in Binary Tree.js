var goodNodes = function(root, max = -Infinity, total = [ 0 ]) {
    count(root, max, total);

    return total[0];
};

const count = (root, max, total) => {
    const isBaseCase = root === null;
    if (isBaseCase) return 0;

    return dfs(root, max, total);
}

const dfs = (root, max, total) => {
    if (root.val >= max) {
        total[0] += 1;
        max = root.val;
    }

    count(root.left, max, total);
    count(root.right, max, total);
}