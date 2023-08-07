/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // 循环+splice
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] == val) {
    //         nums.splice(i, 1)
    //         i = -1  //从索引为0的位置再遍历
    //     }
    // }
    // return nums.length

    // 双指针
    let slow = 0
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] != val) {
            nums[slow] = nums[fast]
            slow++
        }
    }
    return slow



};
// @lc code=end

