/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let newNode = new ListNode()
    let oneFurther = 0
    let head = newNode
    while (oneFurther || l1 || l2) {
        let value1 = l1 !== null ? l1.val : 0
        let value2 = l2 !== null ? l2.val : 0
        let sum1 = value1 + value2 + oneFurther
        sum1 >= 10 ? oneFurther = 1 : oneFurther = 0
        newNode.next = new ListNode(sum1 % 10)

        newNode = newNode.next

        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }
    return head.next

};
// @lc code=end
