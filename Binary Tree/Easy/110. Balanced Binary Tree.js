// #1
var isBalanced = function(root) {
    const isBaseCase = root === null;
    if (isBaseCase) return true;
    if (!isAcceptableHeight(root)) return false;
    if (!isChildBalanced(root))    return false;

    return true;
};

const isChildBalanced = (root) => {
    const left = isBalanced(root.left);
    const right = isBalanced(root.right);

    return right && left;
}

const isAcceptableHeight = (root) => {
    const left = getHeight(root.left);
    const right = getHeight(root.right);

    const difference = Math.abs(left - right);

    return difference <= 1;
}

const getHeight = (root) => {
    const isBaseCase = root === null;
    if (isBaseCase) return 0;

    return dfs(root);
}

const dfs = (root) => {
    const left = getHeight(root.left);
    const right = getHeight(root.right);

    const height = Math.max(left, right);
    
    return height + 1;
}

// 2
const isBalanced = (root) => {
    return getHeights(root) === Infinity ? false : true;
}

const getHeights = (root) => {
    const isBaseCase = root === null;
    if (isBaseCase) return 0;

    const left = getHeights(root.left);
    const right = getHeights(root.right);

    if (Math.abs(left - right) > 1) {
        return Infinity;
    }

    return Math.max(left, right) + 1;
}