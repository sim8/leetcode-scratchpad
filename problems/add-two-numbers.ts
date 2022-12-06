import { buildTests } from '../utils/buildTests';

// https://leetcode.com/problems/add-two-numbers/

type ListNode = {
  val: number;
  next: ListNode | null;
};

function listToNumber(listNode: ListNode): number {
  let currentNode: ListNode | null = listNode;
  let radix = 1;
  let acc = 0;

  while (currentNode) {
    acc += currentNode.val * radix;

    currentNode = currentNode.next;
    radix *= 10;
  }

  return acc;
}

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  const num1 = listToNumber(l1);
  const num2 = listToNumber(l2);

  const result = num1 + num2;

  const valueStrs = `${result}`.split('');

  const finalResult = valueStrs.reduce<ListNode>(
    (acc, current) => ({ val: parseInt(current, 10), next: acc }),
    null as any
  );

  return finalResult;
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
      inputs: [buildLinkedList([2, 4, 3]), buildLinkedList([5, 6, 4])],
      output: buildLinkedList([7, 0, 8]),
    },
  ],
  serializeResult: (listNode) => JSON.stringify(listNode),
});
