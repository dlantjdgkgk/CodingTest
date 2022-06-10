const solutions = (array) => {
    let answer = 'YES';
    let max = 0;
    let sum = array.reduce((a, b) => a + b, 0);
    for (let x of array) {
        if (max < x) {
            max = x;
        }
    }
    if (sum - max > max) return answer;
    else return 'NO';
};
let array = [6, 7, 15];
console.log(solutions(array));
