/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let hash = new Array(1000).fill(0)
    let result = []
    for (let i = 0; i < nums1.length; i++) {
        // 将数组中的数据存入哈希表
        hash[nums1[i]]++
    }
    for (let i = 0; i < nums2.length; i++) {
        if (hash[nums2[i]] != 0) {
            if (!result.includes(nums2[i])) {
                result.push(nums2[i])
            }
        }
    }
    return result

};
// @lc code=end

