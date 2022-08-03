function solutions() {
    let arr = [87, 87, 87, 100, 76];
    let answer = [1, 1, 1, 1, 1];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                answer[i]++;
            }
        }
    }
    return answer;
}
console.log(solutions());
