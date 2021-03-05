function changeName(name) {
    name = 'bob';
}

function anotherFunction() {
    let name = 'jim'
    changeName(name)
    console.log(name);
}

anotherFunction();