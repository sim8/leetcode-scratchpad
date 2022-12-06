import { AlgorithmType, TestCase } from '../types';

export function buildTests<Algorithm extends AlgorithmType>(
  name: string,
  func: Algorithm,
  testCases: TestCase<Algorithm>[]
) {
  testCases.forEach((testCase) => {
    test(`Algorithm: ${name} | test case: ${testCase.inputs}`, () => {
      const result = func(...testCase.inputs);
      expect(result).toEqual(testCase.output);
    });
  });
}
