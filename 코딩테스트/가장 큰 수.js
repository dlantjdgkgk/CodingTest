function solution(numbers) {
    const numbersString = numbers.map((num) => String(num));
    numbersString.sort((a, b) => {
        return parseInt(b + a) - parseInt(a + b);
    });
    const answer = numbersString.join('');
    return answer[0] === '0' ? '0' : answer;
}
