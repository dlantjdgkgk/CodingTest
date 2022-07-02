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
// 시간 복잡도 O(nm)
// 이렇게 구현하였을 때 시간 복잡도가 오래 걸리는지..?

function solution(arr1, arr2) {
    let answer = [];
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    let p1 = (p2 = 0);
    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] == arr2[p2]) {
            answer.push(arr1[p1++]);
            p2++;
        } else if (arr1[p1] < arr2[p2]) p1++;
        else p2++;
    }
    return answer;
}

let a = [1, 3, 9, 5, 2]; // 1,2,3,5,9
let b = [3, 2, 5, 7, 8]; // 2,3,5,7,8
console.log(solution(a, b));
// 시간 복잡도 O(n+m)
