const solutions = (number) => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
};
let number = 10;
console.log(solutions(number));
