function solution(n, a, arr) {
    let answer;
    let result = new Set(); // {}
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                result.add(arr[i] + arr[j] + arr[k]);
            }
        }
    }
    console.log(result);

    let final_result = Array.from(result).sort((a, b) => b - a);
    console.log(final_result);
    answer = final_result[a - 1];
    return answer;
}
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
