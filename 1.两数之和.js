/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // let arr = [];
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] == target) {
  //       arr[0] = i;
  //       arr[1] = j;
  //       break
  //     }
  //   }
  // }
  // return arr;

  let resultMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    let res = target - nums[i]
    if (resultMap.get(res) != undefined) {
      return [resultMap.get(res), i]
    }
    // 注意先查找再添加，否则在测试用例[3, 2, 4]，6下会输出[0,0]
    // 因为6-3=3，输出[0,0]
    resultMap.set(nums[i], i)
  }
};
// @lc code=end
