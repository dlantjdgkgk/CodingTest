// function solution(arr) {
//     let answer = 0;
//     let max = Number.MIN_SAFE_INTEGER;
//     for (let i = 0; i < arr.length; i++) {
//         max = arr[i] + arr[i + 1] + arr[i + 2];
//         if (max > 0) answer = Math.max(answer, max);
//     }
//     return answer;
// }

// let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// console.log(solution(arr));

function solution(arr, k) {
    let answer = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) sum += arr[i];
    for (let i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k];
        answer = Math.max(answer, sum);
    }
    return answer;
}
let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(arr, 3));
