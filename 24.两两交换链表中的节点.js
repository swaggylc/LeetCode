/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head == null || head.next == null) return head
    let tempHead = new ListNode(0, head)
    let current = tempHead
    let temp = current.next.next
    while (temp) {
        current.next.next = temp.next
        temp.next = current.next
        current.next = temp
        // 移动current和temp
        current = current.next.next
        if (current.next == null || current.next.next == null) {
            return tempHead.next
        } else {
            temp = current.next.next
        }
    }
};
// @lc code=end

