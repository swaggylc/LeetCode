/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let index = 1
    let current = head
    let previous = new ListNode()
    while (current.next) {
        current = current.next
        index += 1
    }
    if (index == 1) {
        return null
    }
    current = head
    let position = index + 1 - n
    if(position==1){
        return current.next
    }
    let newIndex = 1

    while (newIndex++ < position) {
        previous = current
        current = current.next
    }
    previous.next = current.next

    return head

};
// @lc code=end

