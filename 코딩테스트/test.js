function solution(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            result.push(numbers[i] + numbers[j]);
            if (i === j) {
                result.pop(numbers[i] + numbers[j]);
            }
        }
    }
    let final_result = new Set(result);
    const res = [...final_result];
    return res.sort((a, b) => a - b);
}
