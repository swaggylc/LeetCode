/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    // 双指针,滑动窗口
    let slow = 0
    let addNumber = 0
    let minLength = nums.length
    for (let fast = 0; fast < nums.length; fast++) {
        addNumber += nums[fast]
        while (addNumber >= target) {
            currentLength = fast - slow + 1     //计算长度
            minLength = Math.min(minLength, currentLength)  //取最小长度
            addNumber = addNumber - nums[slow]  //重新计算和
            slow++  //慢指针右移一位
        }
        if (slow == 0 && fast == nums.length - 1) {
            return 0
        }
    }

    return minLength

};
// @lc code=end

