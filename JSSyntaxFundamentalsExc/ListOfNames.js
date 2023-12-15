function sortNames(names){
    const orderedNames = names.sort((a, b) => a.localeCompare(b));
    for(let i = 0; i < orderedNames.length; i++){
        console.log(`${i+1}.${orderedNames[i]}`);
    }
}
sortNames(["John", 'Bob', 'Christina', 'Ema'])
