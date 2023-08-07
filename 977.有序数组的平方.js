/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let result = []
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
            result.push(Math.pow(nums[left], 2))
            left++
        } else {
            result.push(Math.pow(nums[right], 2))
            right--
        }
    }
    return result.reverse()
};
// @lc code=end

