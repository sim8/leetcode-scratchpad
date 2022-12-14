import { ListNode, TreeNode } from '../types';

export function buildLinkedList(values: number[]): ListNode {
  return values.reduceRight<ListNode>(
    (acc, current) => ({ val: current, next: acc }),
    null as any
  );
}

export function buildBinaryTree(values: (number | null)[]): TreeNode | null {
  if (values[0] === null) {
    return null;
  }
  function buildLevel(
    parentNodes: TreeNode[],
    values: (number | null)[]
  ): TreeNode[] {
    const currentLevelNodes = [];
    for (let i = 0; i < values.length; i++) {}
  }
  const root: TreeNode = {
    val: values[0],
    children: [],
  };
  root.children = buildLevel([root], values.slice(1));
  return root;
}
