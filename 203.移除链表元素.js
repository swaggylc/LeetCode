/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    // let slowHead = head     //节点头
    // let back = null     //慢节点
    // let current = head  //快节点
    // while (current) {
    //     // 判断值是否相等
    //     if (current == slowHead && current.val == val) {
    //         slowHead = current.next
    //         back = current
    //         current = current.next
    //     } else if (current.val != val) {
    //         back = current
    //         current = current.next
    //     } else if (current != head && current.val == val) {
    //         back.next = current.next
    //         current = current.next
    //     }
    // }
    // return slowHead


    // 虚拟头节点
    let dummyNode = new ListNode(0, head)
    let current = dummyNode
    while (current.next) {
        if (current.next.val == val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return dummyNode.next
};
// @lc code=end

