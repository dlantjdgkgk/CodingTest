function solution(numbers) {
    let interger = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let total = interger.reduce((prev, cur) => prev + cur, 0);
    let result = numbers.reduce((prev, cur) => prev + cur, 0);
    return total - result;
}
