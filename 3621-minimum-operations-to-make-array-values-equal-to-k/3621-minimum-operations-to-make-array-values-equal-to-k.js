/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    const st = new Set();
    for (const i of nums) {
        if (i < k) {
            return -1
        } else if (i > k) {
            st.add(i);
        }
    }
    return st.size;
};