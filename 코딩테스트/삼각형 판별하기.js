function solutions(a, b, c) {
    let answer;
    let total = a + b + c;
    if (a < b) {
        answer = b;
    } else {
        answer = a;
    }
    if (c > answer) {
        answer = c;
    }
    if (total - answer > answer) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
console.log(solutions(6, 7, 12));
