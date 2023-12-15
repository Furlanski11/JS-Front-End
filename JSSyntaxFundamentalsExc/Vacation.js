function totalPriceSum(numberOfPeople, typeOfGroup, dayOfWeek){
    let result = 0;
    switch(typeOfGroup){
        case 'Students':
            switch(dayOfWeek){
                case 'Friday':
                    result += numberOfPeople * 8.45;
                    if(numberOfPeople >= 30){
                        result -= result * 0.15;
                    }
                    break;
                case 'Saturday':
                    result += numberOfPeople * 9.80;
                    if(numberOfPeople >= 30){
                        result -= result * 0.15;
                    }
                    break;
                case 'Sunday':
                    result += numberOfPeople * 10.46;
                    if(numberOfPeople >= 30){
                        result -= result * 0.15;
                    }
                    break;
            }
            break;
        case 'Business':
            if(numberOfPeople >= 100){
                numberOfPeople -= 10;
            }
            switch(dayOfWeek){
                case 'Friday':
                    result += numberOfPeople * 10.90;
                    break;
                case 'Saturday':
                    result += numberOfPeople * 15.60;
                    break;
                case 'Sunday':
                    result += numberOfPeople * 16;
                    break;
            }
            break;
         case 'Regular':
            switch(dayOfWeek){
                case 'Friday':
                    result += numberOfPeople * 15;
                    if(numberOfPeople >= 10 && numberOfPeople <= 20){
                        result -= result * 0.05;
                    }
                    break;
                case 'Saturday':
                    result += numberOfPeople * 20;
                    if(numberOfPeople >= 10 && numberOfPeople <= 20){
                        result -= result * 0.05;
                    }
                    break;
                case 'Sunday':
                    result += numberOfPeople * 22.50;
                    if(numberOfPeople >= 10 && numberOfPeople <= 20){
                        result -= result * 0.05;
                    }
                    break;
            }
            break;
    }
    console.log(`Total price: ${result.toFixed(2)}`);
}
totalPriceSum(30, 'Students', 'Sunday');