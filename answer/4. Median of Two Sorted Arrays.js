/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let num = nums1.concat(nums2),
        len = nums1.length + nums2.length;
    num.sort((a,b) => {return a===b ? 0 : a > b ? 1 : -1});
    if (len % 2 === 0) {
    return (num[len/2 - 1] + num[len / 2 ]) / 2;
    }
    else {
        return num[(len + 1) / 2 - 1];
    }
};