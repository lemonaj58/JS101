// name the constructor

console.log("Hello");
console.log([1, 2, 3]);
console.log({name: 'srdjan'});

console.log("Hello".constructor.name);
console.log([1, 2, 3].constructor.name);
console.log({name: 'sdjan'}.constructor.name);

//create the class
class cat {

}

//creat an instance


let kitty = new cat();
console.log(kitty);