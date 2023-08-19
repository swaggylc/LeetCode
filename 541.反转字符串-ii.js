/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    s = s.split('')
    for (let i = 0; i < s.length; i += 2 * k) {
        if (i + k <= s.length) {
            // 反转s中i到i+k个字符
            let left = i
            let right = i + k - 1
            while (left < right) {
                [s[left], s[right]] = [s[right], s[left]]
                left++
                right--
            }
            continue
        }
        // 将不足k的字符全部反转
        let left = i
        let right = s.length - 1
        while (left < right) {
            [s[left], s[right]] = [s[right], s[left]]
            left++
            right--
        }
    }
    return s.join('')
};
// @lc code=end

