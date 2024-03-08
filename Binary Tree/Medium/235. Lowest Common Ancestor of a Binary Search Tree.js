/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
*/

var lowestCommonAncestor = function(root, p, q) {
    const valIsGreater = ((p.val < root.val) && (q.val < root.val));
    if (valIsGreater) return lowestCommonAncestor(root.right, p, q);
    
    const valIsLess = ((root.val < p.val) && (root.val < q.val));
    if (valIsLess) return lowestCommonAncestor(root.left, p, q);

    return root;
};