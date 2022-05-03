function solutions(arr) {
    let result = arr.toLowerCase();
    let answer = result.split('').reverse().join('');
    if (result === answer) {
        console.log('YES');
    } else console.log('NO');
}
let arr = 'gooOG';
console.log(solutions(arr));
