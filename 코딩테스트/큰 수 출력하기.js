function solutions(array) {
    let result = [];
    result.push(array[0]);
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            result.push(array[i]);
        }
    }
    return result;
}
let array = [7, 3, 9, 5, 6, 12];
console.log(solutions(array));
