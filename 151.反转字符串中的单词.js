/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // 转为数组
    s = s.split('')
    // 清除多余空格
    let slow = 0
    for (let fast = 0; fast < s.length; fast++) {
        if (s[fast] != ' ') {
            if (slow != 0) {
                s[slow] = ' '
                slow++
            }
            let start = slow
            while (fast < s.length && s[fast] != ' ') {
                s[slow] = s[fast]
                fast++
                slow++
            }
            let end = slow - 1
            let left = start
            let right = end
            while (left < right) {
                [s[left], s[right]] = [s[right], s[left]]
                left++
                right--
            }
        }
    }
    s = s.slice(0, slow).reverse()
    return s.join('')
};
// @lc code=end

