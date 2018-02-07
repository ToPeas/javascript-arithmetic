class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {

  constructor() {
    this.head = new Node('head');
  }

  // 查找一个节点
  find(item) {
    let currentNode = this.head;
    while (currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  findPre(item) {
    if (item === 'head') {
      throw new Error('你要删除节点是头节点');
    }
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // 插入一个新节点
  insert(newElement, item) {
    const newNode = new Node(newElement);
    if (item.element === 'head') {
      this.head.next = newNode;
      newNode.prev = this.head;
      return;
    }
    const currentNode = this.find(item);
    const currentNodeNextNode = currentNode.next;
    if (currentNodeNextNode === null) {
      newNode.prev = currentNode;
      currentNode.next = newNode;
      return;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    currentNodeNextNode.prev = newNode;
    newNode.prev = currentNode;
  }

  // 删除一个新节点
  remove(item) {
    let preNode = this.findPre(item);
    if (preNode.next.element === item) {
      preNode.next.next.prev = preNode;
      preNode.next = preNode.next.next;
    }
  }

  // 展示出所有的链表
  show() {
    let currentNode = this.head;
    let arr = [];
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      arr.push(currentNode.element);
    }
    return arr;
  }

};

// e.g;

const LL = new DoublyLinkedList();

LL.insert('a1', 'head');
LL.insert('a2', 'a1');
LL.insert('a3', 'a2');
LL.insert('a4', 'a3');
LL.remove('a2');

console.log(LL);
console.log(LL.show());