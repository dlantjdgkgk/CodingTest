function solutions(str) {
    let answer;
    let stack = [];
    for (let x of str) {
        if (!isNaN(x)) {
            stack.push(Number(x));
        } else {
            let rt = stack.pop();
            let lt = stack.pop();
            if (x === '+') stack.push(lt + rt);
            if (x === '-') stack.push(lt - rt);
            if (x === '*') stack.push(lt * rt);
            if (x === '/') stack.push(lt / rt);
        }
    }
    answer = stack[0];
    return answer;
}
let str = '352+*9-';
console.log(solutions(str));
