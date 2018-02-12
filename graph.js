const Queue = require('./queue');

class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Map();
  }

  /**
   * 给图添加一个节点
   * @param v 要添加的节点
   */
  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, new Set());
  }

  /**
   * 给图添加一条边
   * @param v 边的其中一个节点
   * @param w 边的其中另一个节点
   */
  addEdge(v, w) {
    this.adjList.get(v).add(w);
    this.adjList.get(w).add(v);
  }

  //
  /**
   * 删除一条边
   * @param v 边的其中一个节点
   * @param w 边的其中另一个节点
   */
  removeEdge(v, w) {
    this.adjList.get(v).delete(w);
    this.adjList.get(w).delete(v);
  }

  /**
   * 广度优先遍历
   * @param v 要遍历的开始节点
   * @param cb 每一个节点要执行的回调函数
   */
  bfs(v, cb) {
    const read = {};
    Object.values(this.vertices).forEach(key => {
        read[key] = 'white';
      }
    );
    const queue = new Queue();
    queue.enqueue(v);
    read[v] = 'black';
    while (!queue.isEmpty()) {
      let u = queue.dequeue();
      let neighbors = this.adjList.get(u);
      for (let v of neighbors) {
        if (read[v] === 'white') {
          queue.enqueue(v);
          read[v] = 'black';
        }
      }
      if (cb) cb(u);
    }
  }

  /**
   * 深度优先遍历
   * @param v 要遍历的开始节点
   * @param cb 每一个节点要执行的回调函数
   */
  dfs(v, cb) {
    const read = {};
    Object.values(this.vertices).forEach(key => {
        read[key] = 'white';
      }
    );
    const dfsVisit = (u, read, cb) => {
      if (cb) cb(u);
      const neighbors = this.adjList.get(u);
      read[u] = 'black';
      for (let v of neighbors) {
        if (read[v] === 'white') {
          dfsVisit(v, read, cb);
        }
      }
    };

    dfsVisit(v, read, cb);

  }

  /**
   * 展示所有的图节点和边的关系(用领接表的样式)
   * @returns {string}
   */
  toString() {
    let str = '';
    const vertices = this.vertices;
    for (let i = 0; i < this.vertices.length; i++) {
      str += vertices[i] + '  ->  ';
      let neighbors = Array.from(this.adjList.get(vertices[i]));
      for (let j = 0; j < neighbors.length; j++) {
        str += neighbors[j] + ' ';
      }
      str += '\n';
    }
    return str;
  }
}

// e.g;

// const graph = new Graph();
//
// graph.addVertex('a');
// graph.addVertex('b');
// graph.addVertex('c');
// graph.addVertex('d');
// graph.addVertex('e');
// graph.addVertex('f');
// graph.addVertex('g');
//
// graph.addEdge('a', 'b');
// graph.addEdge('a', 'c');
// graph.addEdge('a', 'e');
// graph.addEdge('a', 'd');
// graph.addEdge('b', 'd');
// graph.addEdge('c', 'd');
// graph.addEdge('c', 'e');
// graph.addEdge('c', 'f');
// graph.addEdge('c', 'g');

// console.log(graph);
// console.log(graph.toString());

// graph.removeEdge('a', 'b');
//
// console.log(graph);
// console.log(graph.toString());
//
//
//
// function log(v) {
//   console.log(v + '  ->  ')
// }

// 测试bfs算法
// graph.bfs('a', log)

// 测试dfs算法
// graph.dfs('a', log)






