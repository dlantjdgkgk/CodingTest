function solution(s, t) {
    let answer = [];
    let p = 0;
    for (let x of s) {
        if (x === t) {
            p = 0;
            answer.push(p);
        } else {
            p++;
            answer.push(p);
        }
    }
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === t) p = 0;
        else {
            p++;
            answer[i] = Math.min(answer[i], p);
        }
    }
    return answer;
}

let str = 'teachermade';
console.log(solution(str, 'e'));
