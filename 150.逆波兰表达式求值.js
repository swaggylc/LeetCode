/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/') {
            let num1 = stack.pop()
            let num2 = stack.pop()
            console.log(num1);
            console.log(num2);
            if (tokens[i] == '+') {
                stack.push(parseInt(num2) + parseInt(num1))
            }
            if (tokens[i] == '-') {
                stack.push(num2 - num1)
            }
            if (tokens[i] == '*') {
                stack.push(num2 * num1)
            }
            if (tokens[i] == '/') {
                stack.push(parseInt(num2 / num1))
            }
        } else {
            stack.push(tokens[i])
        }
        console.log(stack);
    }
    return stack[0]
};
// @lc code=end

console.log(evalRPN(["2", "1", "+", "3", "*"]));