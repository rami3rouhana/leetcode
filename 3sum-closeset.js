/**
 * 
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers.
You may assume that each input would have exactly one solution.
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
    let result = nums[0] + nums[1] + nums[nums.length - 1];
    nums.sort((a, b) => (a - b));
    for (let i = 0; i < nums.length - 2; i++) {
        let start = i + 1, end = nums.length - 1;
        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            if (sum > target) end--;
            else start++;
            if (Math.abs(sum - target) < Math.abs(result - target)) result = sum;
        }
    }
    return result;
}