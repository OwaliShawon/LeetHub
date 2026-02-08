/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function longestOnes(nums, k) {
    let start = 0;
    let maxLength = 0;
    let zerosCount = 0;
    
    for (let end = 0; end < nums.length; end++) {
        // Expand window: if we see a 0, increment zero count
        if (nums[end] === 0) {
            zerosCount++;
        }
        
        // Shrink window: if we have too many zeros, move start pointer
        while (zerosCount > k) {
            if (nums[start] === 0) {
                zerosCount--;
            }
            start++;
        }
        
        // Update max length
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}