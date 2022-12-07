import { buildTests } from '../utils/buildTests';

// https://leetcode.com/problems/single-number/

function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  const str = x.toString();

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

buildTests({
  algorithm: isPalindrome,
  testCases: [
    {
      inputs: [121],
      output: true,
    },
    {
      inputs: [-121],
      output: false,
    },
    {
      inputs: [10],
      output: false,
    },
  ],
});
