function solution(answer) {
    let result = [];
    result.push(answer[0]);
    for (let i = 1; i < answer.length; i++) {
        if (answer[i] > answer[i - 1]) {
            result.push(answer[i]);
        }
    }
    return result;
}
let answer = [7, 3, 9, 5, 6, 12];
console.log(solution(answer));
