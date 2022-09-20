function solutions() {
    let arr = [12, 77, 38, 41, 53, 92, 85];
    let sum = 0;
    let min = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            sum += arr[i];
            min.push(arr[i]);
        }
    }
    console.log(sum);
    console.log(Math.min(...min));
}
solutions();
