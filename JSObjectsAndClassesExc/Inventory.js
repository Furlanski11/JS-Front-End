function createHeroes(input){
    class Hero {
        constructor(name, level, items){
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }
    let heroes = [];
    input.forEach(element => {
        let splitted = element.split(' / ');
        let currentHero = new Hero(splitted[0], splitted[1], splitted[2]);
        heroes.push(currentHero);
    });
    heroes.sort((a,b) => a.level - b.level).forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    
});
}
createHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );
    createHeroes([
        'Batman / 2 / Banana, Gun',
        'Superman / 18 / Sword',
        'Poppy / 28 / Sentinel, Antara'
        ]
        )