function solution(s) {
    let answer = '';
    if (s.length % 2 === 1) {
        answer = answer + s[Math.floor(s.length / 2)];
    }
    if (s.length % 2 === 0) {
        answer =
            answer +
            s[Math.floor(s.length / 2) - 1] +
            s[Math.floor(s.length / 2)];
    }
    return answer;
}

// 다른 사람 풀이

function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
