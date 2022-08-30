function solution(n) {
    let answer = 0;
    const arr = new Array(n + 1).fill(true);

    for (let i = 2; i <= n; ++i) {
        // 이미 소수가 아닌 인덱스는 건너뛴다.
        if (arr[i] === false) {
            continue;
        }
        // 배수는 소수가 아니라 0으로 설정
        for (let k = i * 2; k <= n; k += i) {
            arr[k] = false;
        }
    }
    // 소수의 갯수를 구한다.
    for (let i = 2; i <= n; ++i) {
        if (arr[i] === true) {
            answer++;
        }
    }
    return answer;
}
