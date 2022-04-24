function solutions() {
    let answer = ['good', 'time', 'good', 'time', 'student'];
    let result;
    result = answer.filter((ans, i) => answer.indexOf(ans) === i);
    return result;
}
console.log(solutions());
