/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
    // 双指针
    if (head == null) return null
    let current = head
    let previous = null
    while (head) {
        head = head.next
        current.next = previous
        previous = current
        current = head
    }
    return previous
};
// @lc code=end

