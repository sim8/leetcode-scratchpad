import { buildTests } from '../utils/buildTests';

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
  let longestSubstring = 0;
  let currentSubstringStart = 0;

  for (let i = 0; i < s.length; i++) {
    const currentSubstring = s.substring(currentSubstringStart, i);

    const index = currentSubstring.indexOf(s[i]);

    if (index > -1) {
      currentSubstringStart += index + 1;
    } else {
      longestSubstring = Math.max(
        longestSubstring,
        currentSubstring.length + 1
      );
    }
  }
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
    {
      inputs: ['bbtablud'],
      output: 6,
    },
  ],
});
