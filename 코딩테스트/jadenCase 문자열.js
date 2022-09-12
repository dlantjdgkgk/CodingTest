function solution(s) {
    let answer = '';
    let array = s.split(' ');
    let result = array.map(
        (arr) => arr.charAt(0).toUpperCase() + arr.slice(1).toLowerCase()
    );
    answer = result.join(' ');
    return answer;
}
