function solution(input){
    let town = {
        town: '',
        latitude: undefined,
        longitude: undefined,
    }
    input.forEach(element => {
        let splitted = element.split(' | ');
        town.town = splitted[0];
        town.latitude = Number(splitted[1]).toFixed(2);
        town.longitude = Number(splitted[2]).toFixed(2);
        console.log(town);
    });
}
solution(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);