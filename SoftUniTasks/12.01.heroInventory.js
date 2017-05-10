function main(input){

    let allHeroes = [];

    for (var i = 0; i < input.length; i++) {
        let splittedAll = input[i].split(' / ');
        if(splittedAll.length > 2) {
            let splittedItems = splittedAll[2].split(', ');
            let hero = {name: splittedAll[0], level: Number(splittedAll[1]), items: splittedItems};
            allHeroes.push(hero);
        } 
    }

    console.log(JSON.stringify(allHeroes));

}



main(
    [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);