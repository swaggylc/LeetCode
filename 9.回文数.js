/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let str = x.toString()
    let arr = []
    let result = true

    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
    }

    if (arr.length == 1) return true

    let copyArr = JSON.parse(JSON.stringify(arr))
    let resultArr = copyArr.reverse()
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === resultArr[j]) {
        } else {
            result = false
            break
        }
    }

    return result

};
// @lc code=end

