function findTheSmallestNumber(number1, number2, number3){
    let numberArray = [number1, number2, number3];
    console.log(numberArray.sort((a,b) => a-b)[0]);
}
findTheSmallestNumber(25,21,4)