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

//2번째 풀었을 때
const solutions = (arr) => {
    return new Set(arr);
};
let arr = 'ksekkset';
console.log(solutions(arr));
