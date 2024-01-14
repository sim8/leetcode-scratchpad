// https://leetcode.com/problems/symmetric-tree

import { buildTests } from '../utils/buildTests';
import { buildBinaryTreeWithClass } from '../utils/data';

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isMirror(a: TreeNode | null, b: TreeNode | null): boolean {
  if (!a && !b) {
    return true;
  }
  if (!a || !b || a.val !== b.val) {
    return false;
  }
  return isMirror(a.left, b.right) && isMirror(a.right, b.left);
}

function isSymmetric(root: TreeNode | null): boolean {
  return root ? isMirror(root.left, root.right) : true;
}

buildTests({
  algorithm: isSymmetric,
  testCases: [
    {
      inputs: [buildBinaryTreeWithClass([1, 2, 2, 3, null, null, 3])],
      output: true,
    },
    {
      inputs: [buildBinaryTreeWithClass([1, 2, 2, 3, 4, 4, 3])],
      output: true,
    },
    {
      inputs: [buildBinaryTreeWithClass([1, 2, 2, null, 3, null, 3])],
      output: false,
    },
  ],
});
