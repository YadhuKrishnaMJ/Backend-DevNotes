const EventEmitter = require("node:events");



// Extends EventEmitter so PizzaShop can have functionalities of event emitter
class PizzaShop extends EventEmitter{
    constructor(){
        super();
        this.orderno = 0;
    }

    order(size,topping){
        this.orderno++;
        this.emit("order",size,topping);
    }

    displayOrder(){
        console.log(`The order no is: ${this.orderno}`)
    }
}

module.exports = PizzaShop;