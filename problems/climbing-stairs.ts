import { buildTests } from '../utils/buildTests';

// https://leetcode.com/problems/climbing-stairs/

function climbStairs(n: number): number {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  }

  let nMinus2 = 1;
  let nMinus1 = 2;

  for (let i = 3; i < n; i++) {
    [nMinus2, nMinus1] = [nMinus1, nMinus1 + nMinus2];
  }

  return nMinus1 + nMinus2;
}

buildTests({
  algorithm: climbStairs,
  testCases: [
    {
      inputs: [2],
      output: 2,
    },
    {
      inputs: [3],
      output: 3,
    },
    {
      inputs: [4],
      output: 5,
    },
  ],
});
