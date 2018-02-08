class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkList {

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

  // 查找输入节点前一个节点
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
    const currentNode = this.find(item);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // 删除一个新节点
  remove(item) {
    let preNode = this.findPre(item);
    if (preNode.next.element === item) {
      preNode.next = preNode.next.next;
    }
  }

  // 展示出所有的链表
  toString() {
    let currentNode = this.head;
    let str = '';
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      str += currentNode.element;
      console.log(currentNode);
      if (currentNode.next !== null) str += '  <-  ';
    }
    return str;
  }

};

// e.g
// const LL = new LinkList();
//
// LL.insert('a1', 'head');
// LL.insert('a2', 'a1');
// LL.insert('a3', 'a2');
// LL.insert('a4', 'a3');
// LL.remove('a2');
//
// console.log(LL);
// console.log(LL.toString());