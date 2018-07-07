// Write your JS here  Meh, I'll take the next line
const hero = {
    name: "DI Goodman",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "cause confusion",
        damage: 2
    }    
}

function rest(newHealth) {
    hero.health = newHealth
    return hero
    console.log(hero.health);
}
function pickUpItem(item) {
    hero.inventory.push(item)
}
function equipWeapon() {

}

document.getElementById("inn").onclick = rest(11)
