func findNumbers(nums []int) int {
    totalEvenNum := 0
    for _, num := range nums {
        if len(strconv.Itoa(num)) % 2 == 0 {
            totalEvenNum++
        }
    }
    return totalEvenNum
}