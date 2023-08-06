/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // 定义排序函数
    const compareNumbers = (a, b) => a - b;


    let l1 = nums1.length
    let l2 = nums2.length

    let concatArr = nums1.concat(nums2)
    if (l1 == 0) {
        let centerNum = 0

        if (l2 == 1) {
            return nums2[0]
        }

        if (l2 % 2 == 0) {
            let addNum = (nums2[l2 / 2] + nums2[(l2 / 2) - 1])
            centerNum = addNum / 2
        } else {
            centerNum = nums2[(l2 - 1) / 2]
        }
        return centerNum
    }
    if (l2 == 0) {
        let centerNum = 0

        if (l1 == 1) {
            return nums1[0]
        }
        if (l1 % 2 == 0) {
            let addNum = (nums1[l1 / 2] + nums1[(l1 / 2) - 1])
            centerNum = addNum / 2
        } else {
            centerNum = nums1[(l1 - 1) / 2]
        }
        return centerNum
    }
    // 排序后的已合并的数组
    let newArr = concatArr.sort(compareNumbers)
    let allLength = l1 + l2
    if (allLength % 2 == 0) {
        return centerNum = (newArr[allLength / 2] + newArr[allLength / 2 - 1]) / 2
    } else {
        return centerNum = newArr[(allLength - 1) / 2]
    }

};
// @lc code=end

