function solution(array) {
    let answer = 'YES';
    let stack = [];
    for (let x of array) {
        if (x === '(') {
            stack.push(x);
        } else {
            if (stack.length === 0) return 'No';
            stack.pop();
        }
    }
    if (stack.length > 0) return 'No';
    return answer;
}

let a = '()()';
console.log(solution(a));
