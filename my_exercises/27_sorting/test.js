const S = require("./index");
const bubbleSort = S.bubbleSort;
const quickSort = S.quickSort;
const partition = S.partition;
const mergeSort = S.mergeSort;
const merge = S.merge;

function getArray() {
  return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
  return [-124, -40, 0, 7, 21, 100, 500];
}

describe("Bubble sort", () => {
  test("sorts an array", () => {
    expect(bubbleSort(getArray())).toEqual(getSortedArray());
  });
});

describe("Quick sort", () => {
  test("partition function can sort array by baseline values", () => {
    const arr = [8, 10, 1, 2, 12];

    expect(partition(arr, 0, arr.length - 1)).toEqual(2);
    expect(arr).toEqual([2, 1, 8, 10, 12]);
  });

  test("sorts an array", () => {
    expect(quickSort(getArray())).toEqual(getSortedArray());
  });
});

describe("Merge sort", () => {
  test("merge function can join together two sorted arrays", () => {
    const left = [1, 10];
    const right = [2, 8, 12];

    expect(merge(left, right)).toEqual([1, 2, 8, 10, 12]);
  });

  test("sorts an array", () => {
    expect(mergeSort(getArray())).toEqual(getSortedArray());
  });
});
