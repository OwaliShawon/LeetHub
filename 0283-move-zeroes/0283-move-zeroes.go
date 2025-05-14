func moveZeroes(nums []int) {
	snowBallSize := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] == 0 {
			snowBallSize++
		} else if snowBallSize > 0 {
			nums[i-snowBallSize] = nums[i]
			nums[i] = 0
		}
	}
}
