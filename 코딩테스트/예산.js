function solution(d, budget) {
    let answer = 0;
    let total = 0;
    d.sort((a, b) => a - b);
    for (let i = 0; i < d.length; i++) {
        total = total + d[i];
        answer++;
        if (total > budget) {
            answer--;
        }
    }
    return answer;
}
console.log(solution([1, 3, 2, 5, 4], 9));
