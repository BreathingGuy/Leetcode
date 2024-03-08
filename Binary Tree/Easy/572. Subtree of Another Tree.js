// #1
var isSubtree = function(root, subRoot) {
    if (subRoot === null) return true;
    if (root === null) return false;

    if (isSameTree(root, subRoot)) {
        return true;
    }

    let left = isSubtree(root.left, subRoot);
    let right = isSubtree(root.right, subRoot);

    return left || right;
};

var isSameTree = (p, q) => {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;

    let leftSame = isSameTree(p.left, q.left);
    let rightSame = isSameTree(p.right, q.right);

    if (leftSame && rightSame) {
        return true;
    }

    return false;
}

// #2
const hash = (val) => require('crypto')
    .createHash('md5')
    .update(val)
    .digest('hex')

const merkle = (root) => {
    if (!root) return '#';

    const { left, val, right } = root;

    const leftMerkle = merkle(left);
    const rightMerkle = merkle(right);

    const merkleVal = [ leftMerkle, val, rightMerkle ].join('');
    const merkleHash = hash(merkleVal);

    root.merkle = merkleHash;

    return root.merkle;
}

const search = (root, subRoot) => {
    if (!root) return false;

    const hasSamePath = root.merkle === subRoot.merkle;
    if (hasSamePath) return true;

    const left = search(root.left, subRoot);
    const right = search(root.right, subRoot);

    return left || right;
}

var isSubtree = function (root, subRoot) {
    [ root, subRoot ].forEach(merkle);

    return search(root, subRoot);
}

// #3
const hashify = (root, hash, postOrderKey) => {
    if (!root) return '#'

    const left = hashify(root.left, hash, postOrderKey)
    const right = hashify(root.right, hash, postOrderKey)

    const key = [left, root.val, right].join('')

    if (!hash.has(key)) {
        hash.set(key, postOrderKey[0])
        postOrderKey[0]++
    }

    return hash.get(key)
}

var isSubtree = function(root, subRoot, hash = new Map (), postOrderKey = [0]) {
    hashify(root, hash, postOrderKey)

    const hashKey = [
        hashify(subRoot.left, hash, postOrderKey),
        subRoot.val,
        hashify(subRoot.right, hash, postOrderKey)
    ].join('')

    return hash.has(hashKey)
}