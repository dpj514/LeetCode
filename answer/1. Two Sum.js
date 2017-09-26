var twoSum = function(nums, target) {
    for(let i = 0; i <= nums.length - 2; i++) {
        for (let j = i + 1; j <= nums.length - 1; j++) {
            if(nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};