function solutions() {
    let answer = 'assssdwasd';
    let result = '';
    for (let x of answer) {
        if (result.indexOf(x) === -1) {
            result = result + x;
        }
    }
    return result;
}
console.log(solutions());
