var isValidBST = function(root) {
    const isBaseCase = root === null;
    if (isBaseCase) return true;

    const isInvalid = (root.val <= min) && (root.val >= max);
    if (isInvalid) return false;

    return dfs(root, min, max);
};

const dfs = (root, min, max) => {
    const left = isValidBST(root.left, min, root.val);
    const right = isValidBST(root.right, root.val, max);

    return left && right;
}

console.log(32 - Math.clz32(12));