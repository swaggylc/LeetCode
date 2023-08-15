/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (head == null || head.next == null) return null
    let fast = head
    let slow = head
    while (fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next
        if (fast == slow) {
            let index1 = head
            let index2 = fast
            while (index1 != index2) {
                index1 = index1.next
                index2 = index2.next
            }
            return index1
        }
    }
    return null
};
// @lc code=end

