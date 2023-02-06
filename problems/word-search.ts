import { buildTests } from '../utils/buildTests';

// TODO - improve performance with large contiguous blocks of same letter

// https://leetcode.com/problems/word-search/

type Coordinates = [number, number];

function isInBounds([y, x]: Coordinates, board: string[][]) {
  return y > -1 && y <= board.length - 1 && x > -1 && x <= board[0].length - 1;
}

function existsFromSquare(
  board: string[][],
  [y, x]: Coordinates,
  word: string,
  squaresAlreadySearched: Coordinates[]
): boolean {
  const currentLetter = board[y][x];

  if (word === currentLetter) {
    return true;
  }
  if (word.startsWith(currentLetter)) {
    const coordinatesToSearch: Coordinates[] = [
      [y - 1, x] as Coordinates,
      [y, x + 1] as Coordinates,
      [y + 1, x] as Coordinates,
      [y, x - 1] as Coordinates,
    ].filter(
      (toSearch) =>
        isInBounds(toSearch, board) &&
        squaresAlreadySearched.every(
          (alreadySearched) =>
            JSON.stringify(alreadySearched) !== JSON.stringify(toSearch)
        )
    );

    return coordinatesToSearch.some((toSearch) =>
      existsFromSquare(board, toSearch, word.slice(1), [
        ...squaresAlreadySearched,
        [y, x],
      ])
    );
  }

  return false;
}

function exist(board: string[][], word: string): boolean {
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      const exists = existsFromSquare(board, [y, x], word, []);
      if (exists) {
        return true;
      }
    }
  }
  return false;
}

buildTests({
  algorithm: exist,
  testCases: [
    {
      inputs: [
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'ABCCED',
      ],
      output: true,
    },
    {
      inputs: [
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'SEE',
      ],
      output: true,
    },
    {
      inputs: [
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'ABCB',
      ],
      output: false,
    },
    {
      inputs: [
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'E', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'ABCESEEEFS',
      ],
      output: true,
    },
    {
      inputs: [
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'E', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'ABCEFSADEESE',
      ],
      output: true,
    },
  ],
});
