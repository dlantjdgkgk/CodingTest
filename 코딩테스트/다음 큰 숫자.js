const digitOneNum = (num) => {
    const str = num.toString(2);
    let length = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') {
            length++;
        }
    }
    return length;
};

const solution = (n) => {
    const compareLength = digitOneNum(n);
    for (let i = n + 1; i <= 1000000; i++) {
        const answer = digitOneNum(i);
        if (compareLength === answer) {
            return i;
        }
    }
    return answer;
};
