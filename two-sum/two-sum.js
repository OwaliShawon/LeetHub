/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++){
        for(let j = 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                if( i == j){
                    break;
                }
            return [i, j];
        }
        }
    }
};
    

// console.log(twoSum([3,2,3], 6));