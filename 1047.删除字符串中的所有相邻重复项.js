/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        // 判断栈是否为空或相邻元素不相等
        if (stack.length == 0 || s[i] != stack[stack.length - 1]) {
            stack.push(s[i])
        } else {
            // 相等则出栈
            stack.pop()
        }
    }
    // 将栈中元素输出
    return stack.join('')
};
// @lc code=end

