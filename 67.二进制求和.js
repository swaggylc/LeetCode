/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    if (a == '0' && b == '0') return '0'

    let arr1 = []   //[1,0,1,0]
    let arr2 = []   //[1,0,1,1]
    let num1 = 0
    let num2 = 0
    for (let i = 0; i < a.length; i++) {
        arr1.push(a[i])
    }
    for (let i = 0; i < b.length; i++) {
        arr2.push(b[i])
    }

    for (let j = 0; j < arr1.length; j++) {
        num1 += arr1[j] * Math.pow(2, arr1.length - 1 - j)
    }
    for (let j = 0; j < arr2.length; j++) {
        num2 += arr2[j] * Math.pow(2, arr2.length - 1 - j)
    }

    let arr = []
    let num = num1 + num2
    while (num > 0) {
        arr.push(num % 2)
        num = Math.floor(num / 2)
    }
    return arr.reverse().join('')
};
// @lc code=end
