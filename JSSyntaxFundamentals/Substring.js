function substring(text, start, end){
    let word = text.substr(start, end);
    if(start >= 0){
    console.log(word);
    }
}
substring('AntoanFurlanski', 6, 14);