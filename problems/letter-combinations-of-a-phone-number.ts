import { buildTests } from '../utils/buildTests';

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const NUMBERS_TO_LETTERS: Record<string, string[]> = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};

function letterCombinations(digits: string): string[] {
  if (!digits.length) {
    return [];
  }
  const permutationsOfCurrentDigit = NUMBERS_TO_LETTERS[digits[0]];

  if (digits.length === 1) {
    return permutationsOfCurrentDigit;
  }

  const permutationsForRestOfString = letterCombinations(digits.slice(1));

  return permutationsOfCurrentDigit
    .map((letter) =>
      permutationsForRestOfString.map((restOfString) =>
        letter.concat(restOfString)
      )
    )
    .flat();
}

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
