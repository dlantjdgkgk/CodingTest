function solution(n, lost, reserve) {
    let answer = n - lost.length;
    // 처음 가능한 학생수 = n - lost.length
    // lost 배열 앞뒤의 값을 reserve에 포함되어있는지를 확인 -> 해당값을 reserve에서 뺌 + answer++
    // 왜 정렬을 해줘야 하지? - [4,2], [3,5]와 같은 케이스 때문

    let realLost = lost.filter((l) => !reserve.includes(l));
    let realReserve = reserve.filter((r) => !lost.includes(r));
    answer += lost.length - realLost.length;

    realLost.sort((a, b) => a - b);

    realLost.forEach((l) => {
        if (realReserve.length === 0) {
            return;
        }

        if (realReserve.includes(l - 1)) {
            realReserve = realReserve.filter((r) => r !== l - 1);
            answer++;
        } else if (realReserve.includes(l + 1)) {
            realReserve = realReserve.filter((r) => r !== l + 1);
            answer++;
        }
    });
    return answer;
}
