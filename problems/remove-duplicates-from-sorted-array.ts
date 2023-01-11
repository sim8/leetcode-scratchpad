import { buildTests } from '../utils/buildTests';

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums: number[]): number {}

buildTests({
  algorithm: removeDuplicates,
  testCases: [
    {
      inputs: [[1, 1, 2]],
      output: 2,
    },
    {
      inputs: [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]],
      output: 5,
    },
  ],
});
