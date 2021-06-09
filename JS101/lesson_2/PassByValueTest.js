function changeName(name) {
  name = 'bob';
  return name;
}

function anotherFunction() {
  let name = 'jim';
  changeName(name);
  console.log(name);
}

anotherFunction();