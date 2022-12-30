import { buildTests } from '../utils/buildTests';

// https://leetcode.com/problems/valid-parentheses/

const OPENING_TO_CLOSING_BRACKETS: Record<string, string> = {
  '{': '}',
  '[': ']',
  '(': ')',
};

function isValid(s: string): boolean {
  const openBracketsStack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (Object.keys(OPENING_TO_CLOSING_BRACKETS).includes(char)) {
      openBracketsStack.push(char);
    } else {
      if (openBracketsStack.length === 0) {
        return false;
      }
      if (
        OPENING_TO_CLOSING_BRACKETS[
          openBracketsStack[openBracketsStack.length - 1]
        ] === char
      ) {
        openBracketsStack.pop();
      } else {
        return false;
      }
    }
  }
  return openBracketsStack.length === 0;
}

buildTests({
  algorithm: isValid,
  testCases: [
    {
      inputs: ['()'],
      output: true,
    },
    {
      inputs: ['()[]{}'],
      output: true,
    },
    {
      inputs: ['(]'],
      output: false,
    },
  ],
});
