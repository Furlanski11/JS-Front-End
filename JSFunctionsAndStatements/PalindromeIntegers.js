function checkIfAnumberIsApalindrome(numbers){
    for (const number of numbers) {
        let currentNum = number.toString();
        let reversedNum = currentNum.split('').reverse().join('');
        if(currentNum === reversedNum){
            console.log('true')
        }
        else{
            console.log('false');
        }
    }
}
checkIfAnumberIsApalindrome([123,323,421,121]);