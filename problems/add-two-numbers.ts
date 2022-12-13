import { ListNode } from '../types';
import { buildTests } from '../utils/buildTests';
import { buildLinkedList } from '../utils/data';

// https://leetcode.com/problems/add-two-numbers/

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  let l1CurrentNode: ListNode | null = l1;
  let l2CurrentNode: ListNode | null = l2;
  let head;
  let resultPrevNode;
  let carryOver = 0;

  while (l1CurrentNode || l2CurrentNode || carryOver) {
    // Todo - can just stitch on remainder if either empty
    const total =
      (l1CurrentNode ? l1CurrentNode.val : 0) +
      (l2CurrentNode ? l2CurrentNode.val : 0) +
      carryOver;

    const node: ListNode = {
      val: total % 10,
      next: null,
    };

    if (!resultPrevNode) {
      resultPrevNode = node;
      head = node;
    } else {
      resultPrevNode.next = node;
      resultPrevNode = node;
    }

    carryOver = total >= 10 ? 1 : 0;
    l1CurrentNode = l1CurrentNode && l1CurrentNode.next;
    l2CurrentNode = l2CurrentNode && l2CurrentNode.next;
  }

  return head as ListNode;
}

buildTests({
  algorithm: addTwoNumbers,
  testCases: [
    {
      inputs: [buildLinkedList([2, 4, 3]), buildLinkedList([5, 6, 4])],
      output: buildLinkedList([7, 0, 8]),
    },
    {
      inputs: [buildLinkedList([0]), buildLinkedList([0])],
      output: buildLinkedList([0]),
    },
    {
      inputs: [
        buildLinkedList([9, 9, 9, 9, 9, 9, 9]),
        buildLinkedList([9, 9, 9, 9]),
      ],
      output: buildLinkedList([8, 9, 9, 9, 0, 0, 0, 1]),
    },
    {
      inputs: [
        buildLinkedList([
          1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 1,
        ]),
        buildLinkedList([5, 6, 4]),
      ],
      output: buildLinkedList([
        6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1,
      ]),
    },
  ],
  serializeResult: (listNode) => JSON.stringify(listNode),
});
