// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const queue = [root, "layerEnd"];
  const levelWidths = [0];

  while (queue.length > 1) {
    const node = queue.shift();

    if (node === "layerEnd") {
      levelWidths.push(0);
      queue.push("layerEnd");
    } else {
      queue.push(...node.children);
      levelWidths[levelWidths.length - 1]++;
    }
  }

  return levelWidths;
}

module.exports = levelWidth;
