import { buildTests } from '../utils/buildTests';

// https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
  return 4;
}

buildTests('singleNumber', singleNumber, [
  {
    inputs: [[3]],
    output: 2,
  },
]);
