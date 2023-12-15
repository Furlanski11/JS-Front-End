function printEveryNthElementFromArray(array, step){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(i % step == 0){
            newArray.push(array[i]);
        }
    }
    return(newArray);
}
printEveryNthElementFromArray(['5','20','31','4','20'], 2);