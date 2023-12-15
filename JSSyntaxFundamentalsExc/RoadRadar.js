function speedMessages(speed, road){
    let status = null;
    let speedLimit = 0;
    switch(road){
        case 'motorway':
            speedLimit = 130;
            if(speed <= 130){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
                break;
            }
            if(speed - speedLimit <= 20){
                status = 'speeding';
                console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else if(speed - speedLimit <= 40){
                status = 'excessive speeding';
                console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);  
            }
            else if(speed - speedLimit >= 41){
                status = 'reckless driving';
                console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);  
            }
            break;
            case 'interstate':
            speedLimit = 90;
            if(speed <= 90){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
                break;
            }
            if(speed - speedLimit <= 20){
                status = 'speeding';
                console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else if(speed - speedLimit <= 40){
                status = 'excessive speeding';
                console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);  
            }
            else if(speed - speedLimit >= 41){
                status = 'reckless driving';
                console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} -  ${status}`);  
            }
            break;
            case 'city':
            speedLimit = 50;
            if(speed <= 50){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
                break;
            }
            if(speed - speedLimit <= 20){
                status = 'speeding';
                console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else if(speed - speedLimit <= 40){
                status = 'excessive speeding';
                console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);  
            }
            else if(speed - speedLimit >= 41){
                status = 'reckless driving';
                console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);  
            }
            break;
            case 'residential':
            speedLimit = 20;
            if(speed <= 20){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
                break;
            }
            if(speed - speedLimit <= 20){
                status = 'speeding';
                console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else if(speed - speedLimit <= 40){
                status = 'excessive speeding';
                console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);  
            }
            else if(speed - speedLimit >= 41){
                status = 'reckless driving';
                console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);  
            }
            break;
    }
}
speedMessages(120, 'interstate');