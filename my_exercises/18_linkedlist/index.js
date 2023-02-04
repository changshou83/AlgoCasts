// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let curr = this.head;
    let cnt = 0;
    while (curr) {
      cnt++;
      curr = curr.next;
    }
    return cnt;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) return null;

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    return curr;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }
  removeLast() {
    if (this.head && this.head.next) {
      let curr = this.head;
      let prev = null;
      while (curr.next) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = null;
    } else {
      this.removeFirst();
    }
  }
  insertLast(data) {
    if (this.head) {
      const last = this.getLast();
      if (last) last.next = new Node(data);
    } else {
      this.insertFirst(data);
    }
  }
  getAt(index) {
    if (this.head) {
      let curr = this.head;
      let cnt = 0;
      while (curr && cnt < index) {
        cnt++;
        curr = curr.next;
      }
      if (cnt === index) {
        return curr;
      }
    }

    return null;
  }
  insertAt(data, index) {
    if (!this.head || index === 0) {
      this.insertFirst(data);
      return;
    }

    const prev = this.getAt(index - 1) || this.getLast();
    prev.next = new Node(data, prev.next);
  }
  removeAt(index) {
    if (!this.head || index === 0) {
      this.removeFirst();
      return;
    }

    const prev = this.getAt(index - 1);
    if (!prev || !prev.next) {
      return;
    }
    prev.next = prev.next.next;
  }
  forEach(fn) {
    let curr = this.head;
    while (curr) {
      fn(curr);
      curr = curr.next;
    }
  }
  *[Symbol.iterator]() {
    let curr = this.head;
    while (curr) {
      yield curr;
      curr = curr.next;
    }
  }
}

module.exports = { Node, LinkedList };
