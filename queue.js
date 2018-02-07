class Queue {
  constructor() {
    this.data = [];
  }

  // 进队列
  enqueue(element) {
    this.data.push(element);
  }

  // 出队列
  dequeue() {
    this.data.shift();
  }

  // 获取队列的第一个
  first() {
    return this.data[0];
  }

  // 获取队列的最后一个

  end() {
    return this.data[this.data.length - 1];
  }

  // 显示队列里面的所有元素
  toString() {
    let str = '';
    const len = this.data.length;
    for (let i = 0; i < len; i++) {
      str += this.data[i] + '\n';
    }
    return str;
  }

  // 判断队列是否为空
  empty() {
    return !!this.data.length;
  }
};