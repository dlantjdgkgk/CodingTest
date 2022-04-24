function solutions(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count++;
            sum += count;
        } else {
            count = 0;
        }
    }
    return sum;
}
let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solutions(arr));
