import { ListNode } from '../types';
import { buildTests } from '../utils/buildTests';
import { buildLinkedList } from '../utils/data';

// https://leetcode.com/problems/merge-two-sorted-lists/

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 && !list2) {
    return null;
  }
  if (!list1 || !list2) {
    return list1 || list2;
  }
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}

buildTests({
  algorithm: mergeTwoLists,
  testCases: [
    {
      inputs: [buildLinkedList([1, 2, 4]), buildLinkedList([1, 3, 4])],
      output: buildLinkedList([1, 1, 2, 3, 4, 4]),
    },
    {
      inputs: [buildLinkedList([]), buildLinkedList([])],
      output: buildLinkedList([]),
    },
    {
      inputs: [buildLinkedList([]), buildLinkedList([0])],
      output: buildLinkedList([0]),
    },
  ],
  serializeResult: (listNode) => JSON.stringify(listNode),
});
