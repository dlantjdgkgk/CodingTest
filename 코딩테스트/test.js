function solutions(array) {
    let result = 0;
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            result++;
            max = array[i];
        }
    }
    return result;
}
let array = [
    [2, 1],
    [3, 1],
    [3, 2],
    [1, 2],
    [3, 3],
];
console.log(solutions(array));
