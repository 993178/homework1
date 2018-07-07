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

function equipWeapon(weaponLike) {
    hero.inventory.unshift(hero.weapon);
}


document.getElementById("inn").onclick = rest(hero);
document.getElementById("dagger").onclick = pickUpItem(hero,weaponLike);
document.getElementById("bag").onclick = equipWeapon(hero);
//vroeg Arno gister hoe dit nou te doen want vatte het nog steeds 
//niet. Kreeg lang chaotisch antwoord. Never again.
console.log(hero.inventory)