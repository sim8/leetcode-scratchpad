import { buildTests } from '../utils/buildTests';

// https://leetcode.com/problems/add-two-numbers/

type ListNode = {
  val: number;
  next: ListNode | null;
};

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  return l1;
}

function buildLinkedList(values: number[]): ListNode {
  return values.reduceRight<ListNode>(
    (acc, current) => ({ val: current, next: acc }),
    null as any
  );
}

buildTests({
  algorithm: addTwoNumbers,
  testCases: [
    {
      inputs: [buildLinkedList([243]), buildLinkedList([564])],
      output: buildLinkedList([708]),
    },
  ],
  serializeResult: (listNode) => JSON.stringify(listNode),
});
