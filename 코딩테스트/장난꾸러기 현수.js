function solution(arr) {
    let answer = [...arr];
    answer.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== answer[i]) {
            result.push(i + 1);
        }
    }
    return result;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
