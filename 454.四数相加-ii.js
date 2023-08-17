/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let n = nums1.length
    let resultMap = new Map()
    let count = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (resultMap.get(nums1[i] + nums2[j]) == undefined) {
                resultMap.set(nums1[i] + nums2[j], 1)
            } else {
                let value = resultMap.get(nums1[i] + nums2[j])
                // 在set时value值应该是value+=1，而不是value++;value++不合法
                resultMap.set(nums1[i] + nums2[j], value += 1)
            }
        }
    }
    for (let k = 0; k < n; k++) {
        for (let l = 0; l < n; l++) {
            let res = 0 - (nums3[k] + nums4[l])
            if (resultMap.get(res) != undefined) {
                count += resultMap.get(res)
            }
        }
    }
    return count
};
// @lc code=end

fourSumCount([-1, -1], [-1, 1], [-1, 1], [1, -1])