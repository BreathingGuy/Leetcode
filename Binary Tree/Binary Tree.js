class BinaryTreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.parent = null;
        this.value = value;
    }

    get height() {
        let leftHeight = this.left ? this.left.height + 1 : 0;
        let rightHeight = this.right ? this.right.height + 1 : 0;
        return Math.max(leftHeight, rightHeight);
    }

    setLeft(node) {
        if (this.left) {
            this.left.parent = null;
        }
        if (node) {
            this.left = node;
            this.left.parent = this;
        }
    }

    setRight(node) {
        if (this.right) {
            this.right.parent = null;
        }
        if (node) {
            this.right = node;
            this.right.parent = this;
        }
    }
}

// DFS - Deep First Search
function traverseDFRecursive(node, callback) {
    callback(node);

    if (node.left) {
        traverseDFRecursive(node.left, callback)
    }

    if (node.right) {
        traverseDFRecursive(node.right, callback)
    }
}

function traverseDF(root, callback) {
    traverseDFRecursive(root, callback);
}

// BFS - Broad First Search
class Queue {
    constructor() {
        this.arr = [];
    }
    enqueue(value) {
        this.arr.push(value);
    }
    dequeue() {
        return this.arr.shift();
    }
    isEmpty() {
        return this.arr.length === 0;
    }
}

function traverseBF(root, callback) {
    let nodeQueue = new Queue();
    nodeQueue.enqueue(root);

    while (!nodeQueue.isEmpty()) {
        let currentNode = nodeQueue.dequeue();

        callback(currentNode);

        if (currentNode.left) {
            nodeQueue.enqueue(currentNode.left)
        }

        if (currentNode.right) {
            nodeQueue.enqueue(currentNode.right);
        }
    }
}

// Бинарное дерево поиска
class BinarySearchTreeNode extends BinaryTreeNode {
    constructor(value, comparator) {
        super(value);
        this.comparator = comparator;
    }

    // Вставка элемента 
    insert(value) {
        if (this.comparator(value, this.value) < 0) {
            if (this.left) return this.left.insert(value);
            let newNode = new BinarySearchTreeNode(value, this.comparator);
            this.setLeft(newNode);

            return newNode;
        }

        if (this.comparator(value, this.value) > 0) {
            if (this.right) return this.right.insert(value);
            let newNode = new BinarySearchTreeNode(value, this.comparator);
            this.setRight(newNode);

            return newNode;
        }

        return this;
    }

    // Поиск элемента 
    find(value) {
        if (this.value == value) return this;

        if (this.left && value < this.value) {
            return this.left.find(value);
        }

        if (this.right && value > this.value) {
            return this.right.find(value);
        }

        return 'This value does not exist';
    }

    // Минимальный элемент в дереве
    findMin() {
        if (!this.left) {
            return this;
        }

        return this.left.findMin();
    }

    // Удаляем указанный элемент, если он дочерний
    removeChild(nodeToRemove) {
        if (this.left && this.left === nodeToRemove) {
            this.left = null;
            return true;
        }

        if (this.right && this.right === nodeToRemove) {
            this.right = null;
            return true;
        }

        return false;
    }

    // Заменяем дочерний на новый элемент
    replaceChild(nodeToReplace, replacementNode) {
        if (!nodeToReplace || !replacementNode) {
            return false;
        }

        if (this.left && this.left === nodeToReplace) {
            this.left = replacementNode;
            return true;
        }

        if (this.right && this.right === nodeToReplace) {
            this.right = replacementNode;
            return true;
        }

        return false;
    }
}

class BinarySearchTree {
    constructor(value, comparator) {
        this.root = new BinarySearchTreeNode(value, comparator);
        this.comparator = comparator;
    }

    insert(value) {
        this.root.insert(value);
    }

    find(value) {
        return this.root.find(value);
    }

    remove(value) {
        const nodeToRemove = this.find(value);

        if (!nodeToRemove) {
            throw new Error('Item not found');
        }

        const parent = nodeToRemove.parent;

        if (!nodeToRemove.left && !nodeToRemove.right) {
            if (parent) {
                parent.removeChild(nodeToRemove);
            } else {
                nodeToRemove.value = undefined;
            }
        } else if (nodeToRemove.left && nodeToRemove.right) {
            const nextBiggerNode = nodeToRemove.right.findMin();

            if (this.comparator(nextBiggerNode, nodeToRemove.right) === 0) {
                nodeToRemove.value = nodeToRemove.right.value;
                nodeToRemove.setRight(nodeToRemove.right.right);
            } else {
                this.remove(nextBiggerNode.value);
                nodeToRemove.value = nextBiggerNode.value;
            }
        } else {
            // Заменить удаляемый узел на его потомка
            const childNode = nodeToRemove.left || nodeToRemove.right;

            if (parent) {
                parent.replaceChild(nodeToRemove, childNode);
            } else {
                this.root = childNode;
            }
        }

        // Удалить ссылку на родителя
        nodeToRemove.parent = null;

        return true;
    }
}

const tree = new BinarySearchTree(8, (a, b) => a - b);
tree.insert(3);
tree.insert(10);
tree.insert(14);
tree.insert(1);
tree.insert(6);
tree.insert(4);
tree.insert(7);
tree.insert(13);

// console.log(tree.find(13));

// traverseDF(tree.root, node => console.log(node.value));

// tree.remove(3);

traverseDF(tree.root, node => console.log(node.value));



















// let aNode = new BinaryTreeNode('a');

// let bNode = new BinaryTreeNode('b');
// aNode.setLeft(bNode);

// let cNode = new BinaryTreeNode('c');
// aNode.setRight(cNode);

// let dNode = new BinaryTreeNode('d');
// bNode.setRight(dNode);

// let eNode = new BinaryTreeNode('e');
// cNode.setLeft(eNode);

// let fNode = new BinaryTreeNode('f');
// cNode.setRight(fNode);

// traverseDF(aNode, node => console.log(node.value));
// console.log('----------------------------------------------------');
// traverseBF(aNode, node => console.log(node.value));