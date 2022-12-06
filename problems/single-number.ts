import { buildTests } from '../utils/buildTests';

// https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
  const singleNumbersSoFar = {};
  nums.forEach((num) => {
    if (num in singleNumbersSoFar) {
      delete singleNumbersSoFar[num];
    } else {
      singleNumbersSoFar[num] = true;
    }
  });
  return parseInt(Object.keys(singleNumbersSoFar)[0], 10);
}

buildTests('singleNumber', singleNumber, [
  {
    inputs: [[2, 2, 1]],
    output: 1,
  },
  {
    inputs: [[4, 1, 2, 1, 2]],
    output: 4,
  },
  {
    inputs: [[1]],
    output: 1,
  },
]);
