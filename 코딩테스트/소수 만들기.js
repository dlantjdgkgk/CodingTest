function solution(nums) {
    let answer = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                let count = 0;
                for (let b = 1; b <= sum; b++) {
                    if (sum % b == 0) count++;
                }
                if (count == 2) answer++;
            }
        }
    }
    return answer;
}
