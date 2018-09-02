/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const orderedNums = nums.sort((a, b) => {
            return a > b ? 1 : (a === b ? 0 : -1);
        }),
        numsMap = new Map(),
        result = [],
        resultMap = new Map();
    for (let i = 0; i < orderedNums.length; i++) {
        numsMap.set(orderedNums[i], i);
    }
    for (let i = 0; i < orderedNums.length; i++) {
        if (orderedNums[i] === 0 && orderedNums[i + 2] === 0) {
            result.push([0, 0, 0]);
            i = numsMap.get(orderedNums[i]);
            continue;
        }
        for (let j = i + 1; j < orderedNums.length; j++) {
            const n1 = orderedNums[i],
                n2 = orderedNums[j],
                n3 = -orderedNums[i] - orderedNums[j];
            if (numsMap.get(n3) > j) {
                result.push([n1, n2, n3]);
            }

            while (orderedNums[j] === orderedNums[j + 1]) {
                j++;
            }
        }
        while (orderedNums[i + 1] === orderedNums[i]) {
            i++;
        }
    }
    return result;
};