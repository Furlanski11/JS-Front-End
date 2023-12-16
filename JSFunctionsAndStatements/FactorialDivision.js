function factorialDivision(num1, num2){
    let factorialFirst = 1;
    let factorialSecond = 1;
    for(let i = 1; i <= num1; i++){
        factorialFirst *= i;
    }
    for(let i = 1; i <= num2; i++){
        factorialSecond *= i;
    }
    console.log((factorialFirst / factorialSecond).toFixed(2));
}
factorialDivision(5, 2);