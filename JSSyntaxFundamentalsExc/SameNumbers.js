function checkIfNumbersAreTheSame(number){
    let sum = 0;
    let currentNum = 0;
    let stringNum = number.toString();
    let stringArr = [];
    let isTrue = true;
    for (let index = 0; index < stringNum.length; index++) {
        stringArr.push(stringNum[index]);
        }
     for (let index = 0; index < stringArr.length; index++) {
            currentNum = Number.parseInt(stringArr[index]);
            sum += currentNum;
            if(index > 0){
                if(currentNum != stringArr[index - 1]){
                    isTrue = false;
                                                        }
                        }
                }
                console.log(isTrue);
                console.log(sum);
    }
   

checkIfNumbersAreTheSame(2222222);