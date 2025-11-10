/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxOperations(nums, k) {
  const cnt = new Map();
  let ops = 0;
  for (const x of nums) {
    const need = k - x;
    const needCount = cnt.get(need) || 0;
    if (needCount > 0) {
      ops += 1;
      cnt.set(need, needCount - 1);
    } else {
      cnt.set(x, (cnt.get(x) || 0) + 1);
    }
  }
  return ops;
}

