function solutions(a, b, c) {
    // answer = Math.min(a, b, c);
    let answer;
    if (a < b) {
        answer = a;
    } else {
        answer = b;
    }
    if (c < answer) {
        answer = c;
    }
    return answer;
}
console.log(solutions(32, 5, 7));
