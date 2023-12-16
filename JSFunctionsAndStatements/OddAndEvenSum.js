function oddAndEvenSum(number){
    let numberToString = number.toString();
    let oddSum = 0;
    let evenSum = 0;
    for(let i = 0; i < numberToString.length; i++){
        if(Number(numberToString[i]) % 2 == 0){
            evenSum += Number(numberToString[i]);
        }
        else{
            oddSum += Number(numberToString[i]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddAndEvenSum(1000435);