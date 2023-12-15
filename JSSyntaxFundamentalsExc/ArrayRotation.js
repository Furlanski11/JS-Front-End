function arrayRotation(array, rotations){
    for(let i = 0; i < rotations; i++){
        let currentNumber = array.shift();
        array.push(currentNumber);
    }
    console.log(array.join(' '));
}
arrayRotation([2, 4, 15, 31], 5);