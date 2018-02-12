const Queue = require('./queue');

class Graph {
  constructor() {
    this.vertexs = [];
    this.adjList = new Map();
  }

  // 给图添加一个节点
  addVertex(vertex) {
    this.vertexs.push(vertex);
    this.adjList.set(vertex, new Set());
  }

  // 给图添加一条边
  addEdge(v, w) {
    this.adjList.get(v).add(w);
    this.adjList.get(w).add(v);
  }

  // 删除一条边
  removeEdge(v, w) {
    this.adjList.get(v).delete(w);
    this.adjList.get(w).delete(v);
  }

// 广度优先算法

  bfs(v, cb) {
    const read = {};
    Object.values(this.vertexs).forEach(key => {
        read[key] = 'white';
      }
    );
    const queue = new Queue();
    queue.enqueue(v);
    read[v] = 'black';
    while (!queue.isEmpty()) {
      let u = queue.dequeue();
      //             console.log(u)
      let neighbors = this.adjList.get(u);
      for (let v of neighbors) {
        if (read[v] === 'white') {
          queue.enqueue(v);
          read[v] = 'black';

        }

      }
      if (cb) {
        cb(u);
      }
    }
  }

  // 深度优先算法

  dfs(v, cb) {
    const read = {};
    Object.values(this.vertexs).forEach(key => {
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

  // 展示所有的图节点和边的关系

  toString() {
    let str = '';
    const vertexs = this.vertexs;
    for (let i = 0; i < this.vertexs.length; i++) {
      str += vertexs[i] + '  ->  ';
      let neighbors = Array.from(this.adjList.get(vertexs[i]));
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






