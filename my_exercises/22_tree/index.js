// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
  add(data) {
    this.children.push(new Node(data));
  }
  remove(data) {
    let i = 0;
    while (i < this.children.length) {
      if (this.children[i].data === data) {
        this.children.splice(i, 1);
        break;
      } else i++;
    }
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();

      fn(node);
      queue.push(...node.children);
    }
  }
  traverseDF(fn) {
    const stack = [this.root];
    while (stack.length) {
      const node = stack.pop();

      fn(node);
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i]);
      }
    }
  }
}

module.exports = { Tree, Node };
