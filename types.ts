export type AlgorithmType = (...args: any[]) => any;

export type TestCase<Algorithm extends AlgorithmType> = {
  inputs: Parameters<Algorithm>;
  output: ReturnType<Algorithm>;
};

export type ListNode = {
  val: number;
  next: ListNode | null;
};

export type BinaryTreeNode = {
  val: number;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;
};
