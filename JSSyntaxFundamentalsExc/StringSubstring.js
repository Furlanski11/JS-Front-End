function findSubstring(substring, text){
    let splitted = text.split(' ');
    for(const word of splitted){
        if(substring === word.toLowerCase())
        {
            console.log(substring);
            return;
        }
    }
    console.log(`${substring} not found!`);
}
findSubstring('javascript',
'JavaScript is the bestprogramming language');