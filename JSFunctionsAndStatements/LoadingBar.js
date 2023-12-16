function createALoadingBar(percents){
    let count = 0;
    for(let i = 10; i <= 100; i+=10){

        if(i <= percents){
            count++;
        }
    }
    if(percents < 100){
        console.log(`${percents}% [${'%'.repeat(count)}${'.'.repeat(10-count)}]`);
        console.log('Still loading...');
    }
    else{
        console.log('100% Complete!');
    }
}
createALoadingBar(30);