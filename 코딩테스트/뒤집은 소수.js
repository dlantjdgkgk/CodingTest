function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= parseInt(num / 2); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solutions(arr) {
    let answer = [];
    for (let x of arr) {
        let result = parseInt(String(x).split('').reverse().join(''));
        if (isPrime(result)) answer.push(result);
    }
    return answer;
}
let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solutions(arr));
