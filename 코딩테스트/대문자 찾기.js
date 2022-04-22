function solutions() {
    let answer = 'KoreaTimeGood';
    let sum = 0;
    for (x of answer) {
        if (x === x.toUpperCase()) {
            sum++;
        }
    }
    return sum;
}
console.log(solutions());
