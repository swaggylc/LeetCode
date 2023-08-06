/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let pre = 0
    let maxLength = 0
    // Set结构可以快速检测某个值在Set中是否存在
    let set = new Set()

    if (s.length == 0) return 0
    if (s.length == 1) return 1


    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[pre])
            pre++
        }

        set.add(s[i])
        maxLength = Math.max(i - pre + 1, maxLength)
    }
    return maxLength
};
// @lc code=end

