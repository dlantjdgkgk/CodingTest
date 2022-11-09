function solutions(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    let answer;
    for (let x of arr) {
        let sum = x
            .toString()
            .split('')
            .reduce((a, b) => a + Number(b), 0);
        if (sum > max) {
            max = sum;
            answer = x;
        } else if (sum === max) {
            if (x > answer) answer = x;
        }
    }
    return answer;
}
