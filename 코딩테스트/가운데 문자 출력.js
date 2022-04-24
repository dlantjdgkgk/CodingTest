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
