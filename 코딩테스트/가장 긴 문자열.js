function solutions() {
    let answer = ['teacher', 'time', 'student', 'beautiful', 'good'];
    let max = '';
    for (let x of answer) {
        if (x.length > max.length) {
            max = x;
        }
    }
    return max;
}
console.log(solutions());
