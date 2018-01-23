module.exports = class Stack {

  constructor() {
    this.data = []
    this.top = 0

  }

  // 元素进栈的
  push(element) {
    this.data[this.top++] = element
  }

  // 获得栈顶元素

  peek(element) {
    return this.data[this.top - 1]
  }

  //弹出栈顶元素
  pop() {
    return this.data[--this.top]
  }

  // 清空栈
  clear() {
    this.top = 0
  }

  // 获取栈的深度

  length() {
    return this.top
  }

}

// const stack = new Stack ()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// console.log(stack.pop())
// console.log(stack.length())
// console.log(stack.peek())

// e.g

// 回文

/**
 * 判断是否回文
 * @param word
 */
function isPalindrome(word) {
  const s = new Stack ()
  const length = word.length
  for (let i = 0; i < length; i++) {
    s.push (word[i])
  }
  let rword = ''
  while (s.length () > 0) {
    rword += s.pop ()
  }

  return word === rword
}
