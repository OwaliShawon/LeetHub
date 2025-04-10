func minOperations(nums []int, k int) int {
	st := make(map[int]bool)
	for _, i := range nums {
		if i < k {
			return -1
		} else if i > k {
			st[i] = true
		}
	}
	return len(st)
}