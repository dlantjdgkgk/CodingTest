function solution(a, b) {
    let arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let date = new Date(`2016-${a}-${b}`);
    let day = date.getDay();
    return arr[day];
}

console.log(solution(5, 24));
