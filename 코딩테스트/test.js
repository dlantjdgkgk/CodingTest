function solution(array) {
    let answer = 'yes';
    let stack = [];
    for (let x of array) {
        if (x === '(') {
            stack.push(x);
        } else {
            if (stack.length === 0) return 'no';
            stack.pop();
        }
    }
    if (stack.length > 0) return 'no';
    return answer;
}

let a = '()()';
console.log(solution(a));
