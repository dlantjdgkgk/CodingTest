const solutions = (arr) => {
    let sum = arr.reduce((a, b) => a + b, 0);
    console.log(sum);
};
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solutions(arr));
