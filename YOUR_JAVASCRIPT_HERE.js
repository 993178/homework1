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
    console.log("zzz");
    hero.health = 10;
    return hero
}

function pickUpItem(hero,weaponLike) {
    hero.inventory.push(weaponLike);
    console.log("picks it up");
}

function equipWeapon(hero) {
    if (hero.inventory[0] !== undefined) {
    hero.weapon = hero.inventory[0];
    }
}

console.log(hero.inventory[0]);