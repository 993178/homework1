// Write your JS here
let hero = {
    name: "DI Goodman",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "cause confusion",
        damage: 2
    }
}

let weaponLike = {
    type: "dagger",
    damage: 2
}

function rest(hero) {
    hero.health = 10;
    return hero
}

function pickUpItem(hero,weaponLike) {
    hero.inventory.push(weaponLike);
}

function equipWeapon(hero) {
    if (hero.inventory[0] !== undefined) {
    hero.weapon = hero.inventory[0];
    }
}

console.log(hero.inventory[0]);
//Tegen mezelf: "Laten we dat ook eens updaten... Er gebeurt waarschijnlijk niks..." *ververst pagina* *opeens 18/18* "Ui-uu?!!"