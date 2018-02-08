class Stack {
  constructor() {
    this.data = [];
    this.top = 0;

  }

  // 元素进栈的
  push(element) {
    this.data[this.top++] = element;
  }

  // 获得栈顶元素

  peek(element) {
    if (!this.top) throw new Error('栈里面没有元素');
    return this.data[this.top - 1];
  }

  //弹出栈顶元素
  pop() {
    if (!this.top) throw new Error('栈里面没有元素');
    return this.data[--this.top];
  }

  // 清空栈
  clear() {
    this.top = 0;
  }

  // 获取栈的深度
  length() {
    return this.top;
  }

};

// e.g

// const stack = new Stack ()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// console.log(stack.pop())
// console.log(stack.length())
// console.log(stack.peek())

