class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

}

class BinaryTree {
  constructor() {
    this.root = null;

  }

  // 插入节点的辅助函数，通过递归插入
  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // 插入一个节点
  insert(key) {
    const node = new Node(key);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

};

// e.g

// const data = [18, 24, 11, 1, 66, 14, 44, 7, 225];
//
// const binaryTree = new BinaryTree();
//
// data.forEach(item => binaryTree.insert(item));
//
// console.log(binaryTree);