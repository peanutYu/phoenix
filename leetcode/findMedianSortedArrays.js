// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n)) 。
// 你可以假设 nums1 和 nums2 不会同时为空。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let result, middle, low, high;
  nums1 = nums1.concat(nums2);
  nums1.sort((a, b) => a - b);
  const length = nums1.length;
  if (length % 2 === 0) {
    low = length / 2 - 1;
    high = length / 2;
    result = (nums1[low] + nums1[high]) / 2
  } else {
    middle = Math.floor(length / 2);
    result = nums1[middle];
  }
  return result;
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
