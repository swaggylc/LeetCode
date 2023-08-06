/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // 取出数组的第一个元素，遍历它
    for (let i = 0; i < strs[0].length; i++) {
        // s 需要比较的字符
        let s = strs[0][i]
        // 遍历数组
        for (let j = 0; j < strs.length; j++) {
            // 取出每一项的第i个字符与上方的s比较，
            // 若不同，则将第一个字符串的第0-i返回
            if (strs[j].at(i) != s) {
                return strs[0].substring(0, i)
            }
        }
    }
    return strs[0]
};
// @lc code=end

console.log(longestCommonPrefix(['flower', 'floa', 'floiper']));