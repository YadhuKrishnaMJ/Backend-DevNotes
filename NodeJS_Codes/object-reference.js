const obj1 = {
    name: "Bruce Wayne",
};

let obj2 = obj1; //
obj2 = {
    name: "Clark Kent",
}

// this wont modify the origin
console.log(obj1);