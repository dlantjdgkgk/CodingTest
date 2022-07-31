function solutions() {
    let answer = 'StudY';
    let result = '';
    for (let x of answer) {
        if (x === x.toUpperCase()) {
            result += x.toLowerCase();
        } else {
            result += x.toUpperCase();
        }
    }
    return result;
}
console.log(solutions());
