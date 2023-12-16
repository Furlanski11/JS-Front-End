function printAmatrix(size){
    for (let index = 0; index < size; index++) {
        console.log(`${size.toString()} `.repeat(size));
    }
}
printAmatrix(3);