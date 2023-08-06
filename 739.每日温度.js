/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let resArr = new Array(temperatures.length).fill(0)   //结果数组
    let stack = []    //单调栈
    stack[0] = 0   //第一个栈元素
    for (let i = 1; i < temperatures.length; i++) {     //遍历数组
        // 考虑在头部操作数组若数组过大时会导致性能问题，即在尾部操作数组
        if (temperatures[i] < temperatures[stack[stack.length - 1]]) {
            stack.push(i)
        } else if (temperatures[i] == temperatures[stack[stack.length - 1]]) {
            stack.push(i)
        } else {
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let temp = stack.pop()
                resArr[temp] = i - temp
            }
            //  由于unshift方法在头部插入元素，若数组过大时导致性能下降
            // stack.unshift(i)
            stack.push(i)
        }
    }
    return resArr

    // const res = new Array(temperatures.length).fill(0)
    // const stack = []
    // for (let i = temperatures.length - 1; i >= 0; i--) {
    //     while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
    //         stack.pop()
    //     }
    //     if (stack.length) {
    //         res[i] = stack[stack.length - 1] - i
    //     }
    //     stack.push(i)
    // }
    // return res

};
// @lc code=end

