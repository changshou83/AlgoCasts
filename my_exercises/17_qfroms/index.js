// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }
  add(element) {
    while (this.outStack.peek()) {
      this.inStack.push(this.outStack.pop());
    }
    this.inStack.push(element);
  }
  remove() {
    this.peek();
    return this.outStack.pop();
  }
  peek() {
    while (this.inStack.peek()) {
      this.outStack.push(this.inStack.pop());
    }
    return this.outStack.peek();
  }
}

module.exports = Queue;
