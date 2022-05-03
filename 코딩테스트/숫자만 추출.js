function solutions(arr) {
    let result = arr.replace(/[^0-9]/g, '');
    result = result.split('');
    return parseInt(result.join(''));
}
let arr = 'g0en2T0s8eSoft';
console.log(solutions(arr));
