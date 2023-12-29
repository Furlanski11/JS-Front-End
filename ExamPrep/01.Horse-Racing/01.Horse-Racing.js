function solve(input){
    let horses = input.shift().split('|');
    let line = input.shift();

    while(line != 'Finish'){
        const lineArr = line.split(' ');
        const command = lineArr[0];
        const firstHorse = lineArr[1];
        const secondHorse = lineArr[2];

        const firstHorseIndex = horses.indexOf(firstHorse);

        switch(command){
            case 'Retake':
                const secondHorseIndex = horses.indexOf(secondHorse);

                if(firstHorseIndex < secondHorseIndex){
                    horses[secondHorseIndex] = firstHorse;
                    horses[firstHorseIndex] = secondHorse;

                    console.log(`${firstHorse} retakes ${secondHorse}.`);
                }
                break;
            case 'Trouble': 
                if(firstHorseIndex > 0){
                    horses[firstHorseIndex] = horses[firstHorseIndex - 1];
                    horses[firstHorseIndex - 1] = firstHorse;
                    console.log(`Trouble for ${firstHorse} - drops one position.`)
                }
                break;
            case 'Rage':
                if(firstHorseIndex === horses.length - 2){
                    horses[horses.length - 2] = horses[horses.length - 1];
                    horses[horses.length - 1] = firstHorse;
                }
                else if(firstHorseIndex !== horses.length -1 ){
                    horses[firstHorseIndex] = horses[firstHorseIndex + 1];
                    horses[firstHorseIndex + 1] = horses[firstHorseIndex + 2];
                    horses[firstHorseIndex + 2] = firstHorse;
                    
                }
                console.log(`${firstHorse} rages 2 positions ahead.`);
                break;
            case 'Miracle':
                const lastHorse = horses.shift();
                horses.push(lastHorse);
                console.log(`What a miracle - ${lastHorse} becomes first.`)
                break;
        }
        line = input.shift();

    }
    console.log(horses.join('->'));
    console.log(`The winner is: ${horses.pop()}`);
}
solve((['Onyx|Domino|Sugar|Fiona',
'Trouble Onyx',
'Retake Onyx Sugar',
'Rage Domino',
'Miracle',
'Finish'])
);