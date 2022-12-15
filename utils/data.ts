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
  function buildLevel(parentNodes: TreeNode[], values: (number | null)[]) {
    const currentLevelNodes: TreeNode[] = [];
    const valuesForThisLevel = values.slice(0, parentNodes.length * 2);

    valuesForThisLevel.forEach((value, i) => {
      const parentIndex = Math.floor(i / 2);
      const childIndex = i % 2;
      if (value !== null) {
        const node = {
          val: value,
          children: [null, null],
        };
        parentNodes[parentIndex].children[childIndex] = node;
        currentLevelNodes.push(node);
      }
    });

    const valuesForNextLevel = values.slice(parentNodes.length * 2);

    if (valuesForNextLevel.length) {
      buildLevel(currentLevelNodes, valuesForNextLevel);
    }
  }
  const root: TreeNode = {
    val: values[0],
    children: [null, null],
  };
  buildLevel([root], values.slice(1));
  return root;
}

test('buildBinaryTree', () => {
  expect(buildBinaryTree([1])).toEqual({
    val: 1,
    children: [null, null],
  });
  expect(buildBinaryTree([null])).toEqual(null);
  expect(buildBinaryTree([1, 2, 3, null, 4, null, null, 5, null, 6])).toEqual({
    val: 1,
    children: [
      {
        val: 2,
        children: [
          null,
          {
            val: 4,
            children: [
              {
                val: 5,
                children: [
                  {
                    val: 6,
                    children: [null, null],
                  },
                  null,
                ],
              },
              null,
            ],
          },
        ],
      },
      {
        val: 3,
        children: [null, null],
      },
    ],
  });
});
