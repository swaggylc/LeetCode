/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // 二分法
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        var middle = Math.round((left + right) / 2)
        if (nums[middle] > target) {
            right = middle - 1
        } else if (nums[middle] < target) {
            left = middle + 1
        } else {
            return middle
        }
    }

    return nums[middle] > target ? middle : middle + 1
};
// @lc code=end

