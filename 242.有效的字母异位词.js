/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // String 的 charCodeAt() 方法返回一个整数，表示给定索引处的 UTF-16 码元，其值介于 0 和 65535 之间。
    let hash = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        hash[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    }
    for (let i = 0; i < t.length; i++) {
        hash[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--
    }
    for (let i = 0; i < hash.length; i++) {
        if (hash[i] != 0) {
            return false
        }
    }
    return true
};
// @lc code=end

