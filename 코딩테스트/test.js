function solutions(arr) {
    let result = arr.toLowerCase();
    let answer = result.split('').reverse().join('');
    if (result === answer) {
        console.log('YES');
    } else console.log('NO');
}
let arr = 'abcba';
console.log(solutions(arr));
