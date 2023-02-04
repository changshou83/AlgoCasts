// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  return arr;
}

function quickSort(arr, left, right) {
  let partitionIndex;
  left = left || 0;
  right = right || arr.length - 1;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
}

function partition(arr, left, right) {
  let base = left,
    index = base + 1;

  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[base]) {
      swap(index, i);
      index++;
    }
  }

  swap(base, index - 1);
  return index - 1;

  function swap(i, j) {
    const lesser = arr[i];
    arr[i] = arr[j];
    arr[j] = lesser;
  }
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);

  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else if (left[0] > right[0]) {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

module.exports = {
  bubbleSort,
  quickSort,
  partition,
  mergeSort,
  merge,
};
