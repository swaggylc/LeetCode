/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x == 0) return 0

    let str = x.toString()


    if (str[0] == '-') {
        let arr = []
        for (let i = 1; i < str.length; i++) {
            arr.push(str[i])
        }
        arr.reverse()
        arr.unshift('-')
        let resultStr = arr.join('')
        if (Number(resultStr) < (0 - Math.pow(2, 31))) {
            return 0
        }
        return Number(resultStr)

    } else {
        let arr = []
        for (let i = 0; i < str.length; i++) {
            arr.push(str[i])
        }
        arr.reverse()
        let resultStr = arr.join('')
        if (Number(resultStr) > (Math.pow(2, 31) - 1)) {
            return 0
        }
        return Number(resultStr)
    }







};
// @lc code=end

