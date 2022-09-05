function solution(n) {
    let answer = n.toString(3).split('').reverse().join('');
    return parseInt(answer, 3);
}

Method;
Number.toString([radix]);
// 숫자를 문자열로 변환하여 반환한다.  진법을 나타내는 2~36 사이의 정수값을 인수로 전달할 수 있다. 인수 생략시 기본값 10진법이 지정된다.
parseInt(string, radix);
// 전달 받은 문자열을 전달 받은 radix로 분석한 정수를 반환한다.
