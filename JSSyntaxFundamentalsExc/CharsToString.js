function turnCharsToString(char1, char2, char3){
    const charArray = [char1, char2, char3];
    let string = '';
    for(let i = 0; i < 3; i++){
        string += charArray[i];
    }
    console.log(string);
}
turnCharsToString('a', 'b', 'c')