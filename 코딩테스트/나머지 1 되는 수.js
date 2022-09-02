function solution(n) {
    let answer = n;
    for (let i = 0; i < n; i++) {
        if (answer % i == 1) {
            answer = i;
        }
    }
    return answer;
}

console.log(solution(10));
