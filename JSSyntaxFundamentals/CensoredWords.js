function censoreWords(text, word){
    let output = text;
    while(output.includes(word)){
    output = output.replace(word, '*'.repeat(word.length));
    }
    console.log(output)
}
censoreWords('A small sentence with some small words',
'small')