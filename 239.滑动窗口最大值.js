/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let resArr = []   //结果数组
    let dequeue = []    //窗口队列
    for (let i = 0; i < nums.length; i++) {
        // 如果队列的元素已经不在窗口内，则移除
        if (dequeue.length > 0 && dequeue[0] == i - k) {
            dequeue.shift()
        }
        // 需要保证队列的头元素是最大的元素
        while (dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] < nums[i]) {
            // 移除
            dequeue.pop()
        }
        // 添加该元素到队列(下标)
        dequeue.push(i)
        // 窗口完全进入数组中时
        if (i >= k - 1) {
            // 添加
            resArr.push(nums[dequeue[0]])
        }
    }
    // 返回结果
    return resArr
};
// @lc code=end

