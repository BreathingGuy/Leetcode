var mergeTrees = function(root1, root2) {
    if (!root1 || !root2) return root1 || root2;

    const mergedTreeNode = new TreeNode(root1.val + root2.val);

    mergedTreeNode.left = mergeTrees(root1.left, root2.left);
    mergedTreeNode.right = mergeTrees(root1.right, root2.right);

    return mergedTreeNode
};