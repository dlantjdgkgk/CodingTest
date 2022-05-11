function solutions(arrOne, arrTwo) {
    let arr = [];
    let answer = [];
    for (let i = 0; i < arrOne.length; i++) {
        arr.push(arrOne[i]);
    }
    for (let i = 0; i < arrTwo.length; i++) {
        arr.push(arrTwo[i]);
    }
    answer = arr.sort((a, b) => a - b);
    return answer;
}
let arrOne = [1, 3, 5];
let arrTwo = [2, 3, 6, 7, 9];
console.log(solutions(arrOne, arrTwo));
