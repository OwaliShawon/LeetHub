func minimumOperations(nums []int) int {
	ans := 0
	for i := 0; i < len(nums); i += 3 {
		if checkUnique(nums, i) {
			return ans
		}
		ans++
	}
	return ans
}

func checkUnique(nums []int, start int) bool {
	seen := make(map[int]struct{})
	for i := start; i < len(nums); i++ {
		if _, exists := seen[nums[i]]; exists {
			return false
		}
		seen[nums[i]] = struct{}{}
	}
	return true
}