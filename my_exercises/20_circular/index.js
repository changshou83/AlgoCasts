// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slowPoint = list.getFirst();
  let fastPoint = list.getFirst();

  while (fastPoint.next && fastPoint.next.next) {
    fastPoint = fastPoint.next.next;
    slowPoint = slowPoint.next;

    if (slowPoint === fastPoint) {
      return true;
    }
  }
  return false;
}

module.exports = circular;
