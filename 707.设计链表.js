/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

var MyLinkedList = function () {
    // 属性
    this.head = null
    this.length = 0
};
function Node(val) {
    this.val = val
    this.next = null
}
/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    // 判断越界
    if (index < 0 || index > this.length - 1) {
        return -1
    }
    let current = this.head
    let currentIndex = 0
    while (currentIndex++ < index) {
        current = current.next
    }
    return current.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let node = new Node(val)
    let current = this.head
    this.head = node
    node.next = current
    this.length++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let node = new Node(val)
    // 若链表为空
    if (this.head == null) {
        this.head = node
        this.length++
        return
    }
    let current = this.head
    while (current.next) {
        current = current.next
    }
    current.next = node
    this.length++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    // 判断越界
    if (index < 0 || index > this.length) {
        return false
    }
    if (index == 0) {
        this.addAtHead(val)
    } else if (index == this.length) {
        this.addAtTail(val)
    } else {
        let node = new Node(val)
        let current = this.head
        let slowNode = null
        let currentIndex = 0
        while (currentIndex++ < index) {
            slowNode = current
            current = current.next
        }
        slowNode.next = node
        node.next = current
        this.length++
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    // 判断越界
    if (index < 0 || index > this.length - 1) {
        return false
    }
    let current = this.head
    let slowNode = null
    let currentIndex = 0
    if (index == 0) {
        this.head = current.next

    } else {
        while (currentIndex++ < index) {
            slowNode = current
            current = current.next
        }
        slowNode.next = current.next
    }
    this.length--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

