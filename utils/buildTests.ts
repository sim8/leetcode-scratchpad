import { AlgorithmType, TestCase } from '../types';

export function buildTests<Algorithm extends AlgorithmType>({
  algorithm,
  testCases,
  serializeResult,
}: {
  algorithm: Algorithm;
  testCases: TestCase<Algorithm>[];
  serializeResult?: (result: ReturnType<Algorithm>) => any;
}) {
  testCases.forEach((testCase) => {
    test(`Test case: ${testCase.inputs}`, () => {
      const result = algorithm(...testCase.inputs);
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
