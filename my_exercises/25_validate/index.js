// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (!node) return true;

  if (node.left != null && node.left.data < node.data) return false;
  if (node.right != null && node.right.data > node.data) return false;
  if (!validate(node.left) || !validate(node.right)) return false;
  return true;
}

module.exports = validate;
