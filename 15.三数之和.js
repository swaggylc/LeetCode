/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // 先对数组进行排序
    function compareNumbers(a, b) {
        return a - b;
    }
    nums = nums.sort(compareNumbers)
    let result = []
    for (let i = 0; i < nums.length; i++) {
        // 若i个元素大于零，则直接返回
        if (nums[i] > 0) return result
        // 对i进行去重
        if (i > 0 && nums[i] == nums[i - 1]) continue
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] > 0) {
                right--
            } else if (nums[i] + nums[left] + nums[right] < 0) {
                left++
            } else {
                result.push([nums[i], nums[left], nums[right]])
                // 考虑left和right的去重问题
                while (left < right && nums[left] == nums[left + 1]) left++
                while (left < right && nums[right] == nums[right - 1]) right--
                left++
                right--
            }
        }
    }
    return result
};
// @lc code=end

