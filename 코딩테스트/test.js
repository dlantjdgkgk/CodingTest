function solutions() {
    let answer = 'study';
    let final_result = '';
    if (answer.length % 2 !== 0) {
        let result = Math.floor(answer.length / 2);
        final_result += answer[result];
    } else {
        let result = answer.length / 2;
        final_result = answer[result - 1] + answer[result];
    }
    return final_result;
}
console.log(solutions());

// 2번째 풀었을 때

// const solutions = (arr) => {
//     if (arr.length % 2 === 1) {
//         let result = arr.splice(arr.length / 2, 1);
//         return result;
//     } else {
//         let result = arr.splice(arr.length / 2 - 1, 2);
//         return result;
//     }
// };
// let arr = ['s', 'w', 'i', 'm', 'h', 'i', 'j', 'i'];
// console.log(solutions(arr));
