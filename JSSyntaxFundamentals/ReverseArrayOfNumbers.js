function reverseArrayOfNumbers(number, array){
    let newArray = [];
    for(let i = 0; i < number; i++){
        newArray.push(array[i]);
    }
    let result = newArray.reverse();
    console.log(result.join(' '))
}
 reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);