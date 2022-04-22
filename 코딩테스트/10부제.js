function solutions() {
    let arr = [12, 77, 38, 41, 53, 92, 85];
    let number = 3;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 10 === number) {
            result++;
        }
    }
    console.log(result);
}
solutions();
