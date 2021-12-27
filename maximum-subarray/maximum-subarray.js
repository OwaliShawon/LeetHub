/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var maxSum = nums[0];
    var currentSum = maxSum; 
    for(let i = 1; i < nums.length; i++){
        currentSum = Math.max(nums[i] + currentSum, nums[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
};

