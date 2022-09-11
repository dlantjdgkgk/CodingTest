function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer = answer + absolutes[i] * 1;
        } else {
            answer = answer - absolutes[i] * 1;
        }
    }
    answer > 0 ? answer : 0;
    return answer;
}
