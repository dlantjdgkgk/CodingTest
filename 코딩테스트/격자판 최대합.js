function solutions(arr) {
    let total = 0;
    let sumColumn = (sumRow = 0); // 열의 합  // 행의 합
    let left = (right = 0); // 왼쪽 대각선의 합 // 오른쪽 대각선의 합

    for (let i = 0; i < arr.length; i++) {
        sumRow = 0;
        sumColumn = 0;
        for (let j = 0; j < arr.length; j++) {
            sumRow += arr[i][j];
            sumColumn += arr[j][i];
        }
        total = Math.max(sumRow, sumColumn);
    }
    sumRow = 0;
    sumColumn = 0;
    for (let i = 0; i < arr.length; i++) {
        left += arr[i][i];
        right += arr[i][arr.length - i - 1];
    }
    total = Math.max(left, right);
    return total;
}
let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
];
console.log(solutions(arr));
