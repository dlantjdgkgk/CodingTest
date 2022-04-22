function solutions(arr) {
    let answer = [...arr];
    let total = answer.reduce((a, b) => a + b, 0);
    for (let i = 0; i < answer.length - 1; i++) {
        for (let j = 1; j < answer.length; j++) {
            if (total - (answer[i] + answer[j]) === 100) {
                answer.splice(j, 1);
                answer.splice(i, 1);
            }
        }
    }
    return answer;
}
console.log(solutions([20, 7, 23, 19, 10, 15, 25, 8, 13]));
