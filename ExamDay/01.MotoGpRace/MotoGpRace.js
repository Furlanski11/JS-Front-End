function solve(input) {
    const numberOfRiders = Number(input.shift());
    let riders = [];
    for (let i = 0; i < numberOfRiders; i++) {
        let currentRider = input.shift();
        riders.push(currentRider);
    }
 
    riders.forEach((rider, index) => {
        let params = rider.split("|");
        if (params[1] > 100) {
            params[1] = 100;
        }
        riders[index] = params.join("|"); 
    });
 
    let command = input.shift();
 
    while (command !== "Finish") {
 
        let commandInput = command.split(" - ");
 
        if (commandInput[0] === "StopForFuel") {
            riders.forEach((rider, index) => {
                let riderInfo = rider.split("|");
 
                if (riderInfo[0] === commandInput[1]) {
                    if (Number(riderInfo[1]) < Number(commandInput[2])) {
                        console.log(`${riderInfo[0]} stopped to refuel but lost his position, now he is ${commandInput[3]}.`);
                        riderInfo[2] = commandInput[3];
                        riders[index] = riderInfo.join("|"); 
                    } else {
                        console.log(`${riderInfo[0]} does not need to stop for fuel!`);
                    }
                }
            });
        }
        if (commandInput[0] === "Overtaking") {
            let overtakingRider;
            let overtakenRider;
            riders.forEach((rider, index) => {
                let riderInfo = rider.split('|');
                if (commandInput[1] === riderInfo[0]) {
                    overtakingRider = rider;
                }
                if (commandInput[2] === riderInfo[0]) {
                    overtakenRider = rider;
                }
            });
            let riderOnePosition = overtakingRider.split('|')[2];
            let riderTwoPosition = overtakenRider.split('|')[2];
 
            overtakingRider.split('|')[2] = riderTwoPosition;
            overtakenRider.split('|')[2] = riderOnePosition;
            riders.forEach((rider, index) => {
                let riderInfo = rider.split('|');
                if (commandInput[1] === riderInfo[0]) {
                    riderInfo[2] = riderTwoPosition;
                    riders[index] = riderInfo.join("|"); 
                }
                if (commandInput[2] === riderInfo[0]) {
                    riderInfo[2] = riderOnePosition;
                    riders[index] = riderInfo.join("|"); 
                }
            });
            console.log(`${commandInput[1]} overtook ${commandInput[2]}!`);
        }
 
        if (commandInput[0] === "EngineFail") {
            riders.forEach((rider, index) => {
                let riderInfo = rider.split("|");
                if (riderInfo[0] === commandInput[1]) {
                    console.log(`${commandInput[1]} is out of the race because of a technical issue, ${commandInput[2]} laps before the finish.`);
                    riders.splice(index, 1); 
                }
            });
        }
 
        command = input.shift();
    }
 
    for (let i = 0; i < riders.length; i++) {
        let currentRider = riders[i];
        let riderInfo = currentRider.split("|");
        riderInfo[2] = `${i + 1}`;
        riders[i] = riderInfo.join("|"); 
    }
 
    riders.forEach(rider => {
        let riderInfo = rider.split('|');
        console.log(riderInfo[0]);
        console.log(`  Final position: ${riderInfo[2]}`);
    });
}
solve((["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])

)