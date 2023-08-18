/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    // 先对数组进行排序
    function compareNumbers(a, b) {
        return a - b;
    }
    nums = nums.sort(compareNumbers)
    let result = []
    for (let k = 0; k < nums.length; k++) {
        // 剪枝
        if (nums[k] > target && nums[k] > 0) break
        // 去重
        if (k > 0 && nums[k] == nums[k - 1]) continue
        for (let i = k + 1; i < nums.length; i++) {
            // 剪枝
            if (nums[k] + nums[i] > target && nums[k] + nums[i] > 0) break
            // 去重
            if (i > k + 1 && nums[i] == nums[i - 1]) continue
            let left = i + 1
            let right = nums.length - 1
            while (left < right) {
                // 移动left和right
                if (nums[k] + nums[i] + nums[left] + nums[right] > target) {
                    right--
                } else if (nums[k] + nums[i] + nums[left] + nums[right] < target) {
                    left++
                } else {
                    result.push([nums[k], nums[i], nums[left], nums[right]])
                    // left和right的去重问题
                    while (left < right && nums[left] == nums[left + 1]) left++
                    while (left < right && nums[right] == nums[right - 1]) right--
                    left++
                    right--
                }
            }
        }
    }
    return result
};
// @lc code=end

