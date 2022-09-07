function solution(nums) {
    let count = nums.length / 2;
    let result = [...new Set(nums)];

    return result.length > count ? count : result.length;
}
