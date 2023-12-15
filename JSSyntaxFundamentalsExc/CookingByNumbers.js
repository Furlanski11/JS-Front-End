function cooking(number, ...commands){
    let currentNum = Number.parseInt(number);
    for(let i = 0; i < commands.length; i++){
        let currentCommand = commands[i];
        switch(currentCommand){
            case 'chop':
                currentNum = currentNum / 2;
                break;
            case 'dice':
                currentNum = Math.sqrt(currentNum);
                break;
            case 'spice':
                currentNum = currentNum + 1;
                break;
            case 'bake':
                currentNum = currentNum * 3;
                break;
            case 'fillet':
                currentNum = currentNum - (currentNum * 0.20);
                break;
        }
        console.log(currentNum);
    }
}
cooking(9, 'dice', 'spice', 'chop', 'bake', 'fillet');