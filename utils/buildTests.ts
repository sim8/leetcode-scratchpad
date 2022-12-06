import { AlgorithmType, TestCase } from '../types';

type Options<Algorithm extends AlgorithmType> = {
  serializeResult?: (result: ReturnType<Algorithm>) => any;
};

export function buildTests<Algorithm extends AlgorithmType>(
  func: Algorithm,
  testCases: TestCase<Algorithm>[],
  { serializeResult }: Options<Algorithm> = {}
) {
  testCases.forEach((testCase) => {
    test(`Test case: ${testCase.inputs}`, () => {
      const result = func(...testCase.inputs);
      if (serializeResult) {
        expect(serializeResult(result)).toEqual(
          serializeResult(testCase.output)
        );
      } else {
        expect(result).toEqual(testCase.output);
      }
    });
  });
}
