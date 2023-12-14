function count(text, searchedWord){
    let times = 0;
    let words = text.split(' ');
    for(let word of words){
        if(word == searchedWord){
            times++;
        }
    }
    console.log(times);
} 