import { buildTests } from '../utils/buildTests';

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

function letterCombinations(digits: string): string[] {}

buildTests({
  algorithm: letterCombinations,
  testCases: [
    {
      inputs: ['23'],
      output: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
    },
    {
      inputs: [''],
      output: [],
    },
    {
      inputs: ['2'],
      output: ['a', 'b', 'c'],
    },
  ],
});
