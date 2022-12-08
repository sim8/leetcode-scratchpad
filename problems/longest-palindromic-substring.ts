import { buildTests } from '../utils/buildTests';

// clarify constraints
// talk through brute force solution. Tradeoffs?
// implement
// optimize. Tradeoffs?

/**
 *
 * @param s String to find palindromic substring in
 * @param centerIndex index from which to look outwards for longest palindrome. Is the "left" index if isEven === true
 * @param isEven Whether the palindrome to look for has two or one letter in center.
 * @returns longest palindroming substring
 */
function getLongestPalindromeFromPoint(
  s: string,
  centerIndex: number,
  isEven: boolean
): string | null {
  const endOfCenterIndex = isEven ? centerIndex + 1 : centerIndex;
  if (
    isEven &&
    (s.length - 1 < endOfCenterIndex || // smallest possible palindrome out of bounds // TODO logic might be redundant later
      s[centerIndex] !== s[endOfCenterIndex]) // smallest possible palindrome not valid
  ) {
    return null;
  }

  let currentPairs = 0;
  let nextSizeIncrease = 1; // number of letter pairs beyond index
  while (
    endOfCenterIndex + nextSizeIncrease <= s.length - 1 &&
    centerIndex - nextSizeIncrease >= 0 &&
    s[centerIndex - nextSizeIncrease] === s[endOfCenterIndex + nextSizeIncrease]
  ) {
    currentPairs++;
    nextSizeIncrease++;
  }
  return s.substring(
    centerIndex - currentPairs,
    endOfCenterIndex + currentPairs + 1
  );
}

function longestPalindrome(s: string): string {
  const centerOfString = Math.floor((s.length - 1) / 2); // 2 - 1
  let longestPalindrome = s[centerOfString];

  function maybeSetAsLongest(result: string | null, override?: boolean) {
    if (!result) {
      return false;
    }
    if (
      result.length > longestPalindrome.length ||
      (override && result.length >= longestPalindrome.length)
    ) {
      longestPalindrome = result;
    }
  }

  maybeSetAsLongest(getLongestPalindromeFromPoint(s, centerOfString, false));
  maybeSetAsLongest(getLongestPalindromeFromPoint(s, centerOfString, true));

  let distanceFromCenterToSearch = 1;
  while (distanceFromCenterToSearch <= s.length / 2) {
    maybeSetAsLongest(
      getLongestPalindromeFromPoint(
        s,
        centerOfString - distanceFromCenterToSearch,
        false
      ),
      true
    );
    maybeSetAsLongest(
      getLongestPalindromeFromPoint(
        s,
        centerOfString - distanceFromCenterToSearch,
        true
      ),
      true
    );
    maybeSetAsLongest(
      getLongestPalindromeFromPoint(
        s,
        centerOfString + distanceFromCenterToSearch,
        false
      )
    );
    maybeSetAsLongest(
      getLongestPalindromeFromPoint(
        s,
        centerOfString + distanceFromCenterToSearch,
        true
      )
    );
    distanceFromCenterToSearch++;
  }

  return longestPalindrome;
}

test('getLongestPalindromeFromPoint', () => {
  // odd
  expect(getLongestPalindromeFromPoint('aba', 0, false)).toEqual('a');
  expect(getLongestPalindromeFromPoint('aba', 1, false)).toEqual('aba');
  expect(getLongestPalindromeFromPoint('aba', 2, false)).toEqual('a');
  // even
  expect(getLongestPalindromeFromPoint('abba', 0, true)).toEqual(null);
  expect(getLongestPalindromeFromPoint('abba', 1, true)).toEqual('abba');
  expect(getLongestPalindromeFromPoint('aabb', 2, true)).toEqual('bb');
  expect(getLongestPalindromeFromPoint('aabb', 3, true)).toEqual(null);
});

buildTests({
  algorithm: longestPalindrome,
  testCases: [
    { inputs: ['babad'], output: 'bab' },
    { inputs: ['cbbd'], output: 'bb' },
    { inputs: ['abcd'], output: 'a' },
    { inputs: ['ascc'], output: 'cc' },
    { inputs: ['abba'], output: 'abba' },
    { inputs: ['bob'], output: 'bob' },
  ],
});
