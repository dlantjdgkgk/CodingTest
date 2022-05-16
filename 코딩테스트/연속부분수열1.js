function solution(m, arr) {
    let answer = 0;
    let lt = 0;
    let sum = 0;
    for (let rt = 0; rt < arr.length; rt++) {
        sum = sum + arr[rt];
        if (sum === m) answer++;
        while (sum >= m) {
            sum = sum - arr[lt++];
            if (sum === m) answer++;
        }
    }
    return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
