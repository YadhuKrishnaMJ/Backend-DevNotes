const EventEmitter = require("node:events");

//To emit an event , we use an emitter object
const emitter = new EventEmitter(); // Emitter object 

//Listens for an event (event name, callback fn)
emitter.on("order-pizza",(size,topping)=>{
    console.log(`Order Recieved baking a ${size} pizza with ${topping}`);
});

emitter.on("order-pizza", (size) =>{
    if(size =="large"){
        console.log("Serving Complimentary drink");
    }
});

//emits an event (event, data)
emitter.emit("order-pizza","large","mushroom");