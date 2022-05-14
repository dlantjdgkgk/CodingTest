function solutions(arrOne, arrTwo) {
    let arr = [];
    let answer = [];
    for (let i = 0; i < arrOne.length; i++) {
        for (let j = 0; j < arrTwo.length; j++) {
            if (arrOne[i] === arrTwo[j]) arr.push(arrTwo[j]);
        }
    }
    answer = arr.sort((a, b) => a - b);
    return answer;
}
let arrOne = [1, 3, 5, 9, 2];
let arrTwo = [3, 2, 5, 7, 8];
console.log(solutions(arrOne, arrTwo));

// 이렇게 구현하였을 때 시간 복잡도가 오래 걸리는지..?
