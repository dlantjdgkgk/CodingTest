function solution() {
    let arr = [130, 135, 148, 140, 145, 150, 150, 153];
    let result = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            result++;
        }
    }
    return result;
}
console.log(solution());
