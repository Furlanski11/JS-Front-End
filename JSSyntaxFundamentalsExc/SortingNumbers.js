function sortArray(array){
    let sortedArray = array.sort((a,b) => a - b);
    let result = [];
    const length = array.length
    for(let i= 0; i < length; i++){
        if(i % 2 == 0){
            result[i] = sortedArray.shift();
        }
        else
        {
            result[i] = sortedArray.pop();
        }
    }
    return result;
}
sortArray([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);