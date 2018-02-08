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

  // 删除一条边
  removeEdge(v, w) {
    this.adjList.get(v).delete(w);
    this.adjList.get(w).delete(v);
  }

}

// e.g;

// const graph = new Graph();
//
// graph.addVertex('a');
// graph.addVertex('b');
// graph.addVertex('c');
// graph.addVertex('d');
//
// graph.addEdge('a', 'b');
// graph.addEdge('a', 'c');
// graph.addEdge('a', 'd');
// graph.addEdge('b', 'd');
// graph.addEdge('c', 'd');
//
// console.log(graph);
// console.log(graph.toString());
//
// graph.removeEdge('a', 'b');
//
// console.log(graph);
// console.log(graph.toString());

