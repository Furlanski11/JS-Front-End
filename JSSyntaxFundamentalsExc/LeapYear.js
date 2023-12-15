function leapYearFinder(year){
    let result = "";
    if(year % 4 == 0 && year % 100 != 0){
       result = 'yes';
    }
    else{
        result = 'no';
    }

    if(year % 400 == 0){
        result = 'yes';
    }
    console.log(result);
}
leapYearFinder(4);