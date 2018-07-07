// Write your JS here  Meh, I'll take the next line
const hero = {
    name: "DI Goodman",
    isChaotic: true,
    //am I misunderstanding this boolean-property thing? Test won't OK this
    inventory: [],
    health: 10,
    weapon: {
        type: "cause confusion",
        damage: 2
    },
    rest: function() {
        health = health+1
    },
    pickUpItem: function(item) {
        this.inventory.push(item)
    }

}