/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // 二分法
    // 左闭右闭     【left,right】
    // let left = 0
    // let right = nums.length - 1
    // while (left <= right) {
    //     let middle = Math.floor((left + right) / 2)
    //     if (nums[middle] > target) {
    //         right = middle - 1
    //     } else if (nums[middle] < target) {
    //         left = middle + 1
    //     } else {
    //         return middle
    //     }
    // }
    // return -1

    // 左闭右开     【left,right)
    if (nums.length == 1) {
        return target == nums[0] ? 0 : -1
    }
    let left = 0
    let right = nums.length     //由于右边是开区间，所以right = nums.length
    while (left < right) {
        let middle = Math.floor((left + right) / 2)
        if (nums[middle] > target) {
            right = middle
        } else if (nums[middle] < target) {
            left = middle + 1
        } else {
            return middle
        }
    }
    return -1
};
// @lc code=end

