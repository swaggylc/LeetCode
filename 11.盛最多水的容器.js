/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // 考虑双指针
    let area = 0
    let left = 0
    let right = height.length - 1
    while (left < right) {
        let currentHeight = Math.min(height[left], height[right])
        let currentWidth = right - left
        let currentArea = currentHeight * currentWidth
        area = Math.max(area, currentArea)

        if (height[left] < height[right]) {
            left += 1
        } else {
            right -= 1
        }
    }
    return area

};
// @lc code=end

