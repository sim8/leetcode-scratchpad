import binarySearch from '../algorithms/binarySearch';
import { buildTests } from '../utils/buildTests';

// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

function searchRange(nums: number[], target: number): number[] {
  const index = binarySearch(nums, target);
  if (index === -1) {
    return [-1, -1];
  }
  let firstIndex = index;
  let lastIndex = index;
  while (nums[firstIndex - 1] === target) {
    firstIndex--;
  }
  while (nums[lastIndex + 1] === target) {
    lastIndex++;
  }
  return [firstIndex, lastIndex];
}

buildTests({
  algorithm: searchRange,
  testCases: [
    {
      inputs: [[5, 7, 7, 8, 8, 10], 8],
      output: [3, 4],
    },
    {
      inputs: [[5, 7, 7, 8, 8, 10], 6],
      output: [-1, -1],
    },
    {
      inputs: [[], 0],
      output: [-1, -1],
    },
  ],
});
