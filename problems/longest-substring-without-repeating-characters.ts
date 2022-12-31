import { buildTests } from '../utils/buildTests';

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
  let longestSubstring = 0;
  //

  return longestSubstring;
}

buildTests({
  algorithm: lengthOfLongestSubstring,
  testCases: [
    {
      inputs: ['abcabcbb'],
      output: 3,
    },
    {
      inputs: ['bbbbb'],
      output: 1,
    },
    {
      inputs: ['pwwkew'],
      output: 3,
    },
  ],
});
