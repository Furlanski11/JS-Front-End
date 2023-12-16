function isItAPerfectNumber(number){
    let sum = 0;
    const numberToString = number.toString();
    for (let index = 0; index < number; index++) {
        if(number % index == 0 && number !== index){
            sum += index;
        }            
    }
    if(sum === number){
        console.log('We have a perfect number!');
    }
    else{
        console.log("It's not so perfect.")
    }
}
isItAPerfectNumber(1236498);