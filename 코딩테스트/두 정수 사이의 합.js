function solution(a, b) {
    let arr = [];
    if (a === b) {
        return a;
    }
    if (a < b) {
        for (let i = a; i <= b; i++) {
            arr.push(Number(`${i}`));
        }
        return arr.reduce((prev, cur) => Number(prev + cur), 0);
    }
    if (a > b) {
        for (let i = b; i <= a; i++) {
            arr.push(Number(`${i}`));
        }
        return arr.reduce((prev, cur) => Number(prev + cur), 0);
    }
}
