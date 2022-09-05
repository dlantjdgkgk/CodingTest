function solution(answers) {
    let answer = [];
    let count = 0;
    let count1 = 0;
    let count2 = 0;
    let first = [1, 2, 3, 4, 5];
    let second = [2, 1, 2, 3, 2, 4, 2, 5];
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    for (let i = 0; i < answers.length; i++) {
        if (first[i % 5] === answers[i]) count++;
    }
    for (let i = 0; i < answers.length; i++) {
        if (second[i % 8] === answers[i]) count1++;
    }
    for (let i = 0; i < answers.length; i++) {
        if (third[i % 10] === answers[i]) count2++;
    }
    let result = Math.max(count, count1, count2);

    if (result === count) answer.push(1);
    if (result === count1) answer.push(2);
    if (result === count2) answer.push(3);
    return answer;
}
