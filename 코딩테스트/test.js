function solutions(arr) {
    let result = arr.toLowerCase().replace(/[^a-z]/g, '');
    let answer = result.split('').reverse().join('');
    if (result === answer) {
        console.log('YES');
    } else console.log('NO');
}
let arr = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solutions(arr));
