import { buildTests } from '../utils/buildTests';

// https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs: string[]): string {
  return strs.reduce((prefix, str) => {
    for (let i = 0; i < prefix.length; i++) {
      if (prefix[i] !== str[i]) {
        return prefix.substring(0, i);
      }
    }
    return prefix;
  });
}

buildTests({
  algorithm: longestCommonPrefix,
  testCases: [
    {
      inputs: [['flower', 'flow', 'flight']],
      output: 'fl',
    },
    {
      inputs: [['dog', 'racecar', 'car']],
      output: '',
    },
  ],
});
