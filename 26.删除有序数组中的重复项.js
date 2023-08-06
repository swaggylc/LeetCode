/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let newSet = new Set()
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (newSet.size == 0) {
            newSet.add(nums[i])
        }
        if (i >= 1) {
            if (!newSet.has(nums[i])) {
                newSet.add(nums[i])
            }
        }
    }
    newSet.forEach((value) => {
        arr.push(value)
    })

    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i]
    }

    return arr.length
};
// @lc code=end

console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 5, 6]));
