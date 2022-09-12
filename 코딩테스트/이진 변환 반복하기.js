function solution(s) {
    var answer = [0, 0];

    while (s != '1') {
        answer[0]++;
        let cnt = 0;
        for (let i of s) {
            if (i == '1') cnt++;
        }
        answer[1] += s.length - cnt;
        s = cnt.toString(2);
    }

    return answer;
}
