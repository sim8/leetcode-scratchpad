import TreeNode from '../classes/TreeNode';
import { ListNode, BinaryTreeNode } from '../types';

export function buildLinkedList(values: number[]): ListNode {
  return values.reduceRight<ListNode>(
    (acc, current) => ({ val: current, next: acc }),
    null as any
  );
}

export function buildBinaryTree(
  values: (number | null)[]
): BinaryTreeNode | null {
  if (values[0] === null) {
    return null;
  }
  function buildLevel(
    parentNodes: BinaryTreeNode[],
    values: (number | null)[]
  ) {
    const currentLevelNodes: BinaryTreeNode[] = [];
    const valuesForThisLevel = values.slice(0, parentNodes.length * 2);

    valuesForThisLevel.forEach((value, i) => {
      const parentIndex = Math.floor(i / 2);
      if (value !== null) {
        const node = {
          val: value,
          left: null,
          right: null,
        };
        if (i % 2) {
          parentNodes[parentIndex].right = node;
        } else {
          parentNodes[parentIndex].left = node;
        }
        currentLevelNodes.push(node);
      }
    });

    const valuesForNextLevel = values.slice(parentNodes.length * 2);

    if (valuesForNextLevel.length) {
      buildLevel(currentLevelNodes, valuesForNextLevel);
    }
  }
  const root: BinaryTreeNode = {
    val: values[0],
    left: null,
    right: null,
  };
  buildLevel([root], values.slice(1));
  return root;
}

export function buildBinaryTreeWithClass(
  values: (number | null)[]
): TreeNode | null {
  if (values[0] === null) {
    return null;
  }
  function buildLevel(parentNodes: TreeNode[], values: (number | null)[]) {
    const currentLevelNodes: TreeNode[] = [];
    const valuesForThisLevel = values.slice(0, parentNodes.length * 2);

    valuesForThisLevel.forEach((value, i) => {
      const parentIndex = Math.floor(i / 2);
      if (value !== null) {
        const node = new TreeNode(value);
        if (i % 2) {
          parentNodes[parentIndex].right = node;
        } else {
          parentNodes[parentIndex].left = node;
        }
        currentLevelNodes.push(node);
      }
    });

    const valuesForNextLevel = values.slice(parentNodes.length * 2);

    if (valuesForNextLevel.length) {
      buildLevel(currentLevelNodes, valuesForNextLevel);
    }
  }
  const root = new TreeNode(values[0]);
  buildLevel([root], values.slice(1));
  return root;
}

test('buildBinaryTree', () => {
  expect(buildBinaryTree([1])).toEqual({
    val: 1,
    left: null,
    right: null,
  });
  expect(buildBinaryTree([null])).toEqual(null);
  expect(buildBinaryTree([1, 2, 3, null, 4, null, null, 5, null, 6])).toEqual({
    val: 1,
    left: {
      val: 2,
      left: null,
      right: {
        val: 4,
        left: {
          val: 5,
          left: {
            val: 6,
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  });
});
