import { buildTests } from '../utils/buildTests';

export default function binarySearch<T>(
  arr: T[],
  val: T,
  startIndex?: number,
  endIndex?: number
): number {
  startIndex = typeof startIndex === 'number' ? startIndex : 0;
  endIndex = typeof endIndex === 'number' ? endIndex : arr.length;
  const middle = startIndex + Math.floor((endIndex - startIndex) / 2);
  if (arr[middle] === val) {
    return middle;
  } else if (arr[middle] > val) {
    return middle > startIndex
      ? binarySearch(arr, val, startIndex, middle)
      : -1;
  } else {
    return endIndex > middle + 1
      ? binarySearch(arr, val, middle + 1, endIndex)
      : -1;
  }
}

buildTests({
  algorithm: binarySearch,
  testCases: [
    {
      inputs: [[1], 1],
      output: 0,
    },
    {
      inputs: [[1, 2, 3], 2],
      output: 1,
    },
    {
      inputs: [[1, 2, 3], 3],
      output: 2,
    },
    {
      inputs: [[1, 2, 3, 4], 2],
      output: 1,
    },
    {
      inputs: [[1, 2, 3, 4, 6, 8], 6],
      output: 4,
    },
    {
      inputs: [[1, 2, 3], 4],
      output: -1,
    },
    {
      inputs: [[1, 2, 3], 0],
      output: -1,
    },
    {
      inputs: [[1, 2, 3], 1.5],
      output: -1,
    },
  ],
});
