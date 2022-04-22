function solutions() {
    let answer = 'COMPUTERPROGRAMMING';
    let sum = 0;
    for (x of answer) {
        if (x === 'A') {
            sum++;
        }
    }
    return sum;
}
console.log(solutions());
