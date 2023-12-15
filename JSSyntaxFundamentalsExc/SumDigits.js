function sumDigits(number){
    let sum = 0;
    const digitsToString = number.toString();
    for(let i = 0; i < digitsToString.length; i++){
        sum += Number.parseInt(digitsToString[i]);
    }
    console.log(sum)
}
sumDigits(245678)