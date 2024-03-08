var searchBST = function(root, val) {
    if (!root) return null
    if (root.val == val) return root;

    const left = searchBST(root.left, val);
    const right = searchBST(root.right, val);

    return left || right
};