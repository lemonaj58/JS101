

class Todo {

  constructor (title) {
    this.title = title;
    this.done = false;
  }
  static DONE_MARKER() {return "X"}
  static UNDONE_MARKER() {return " "}

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER() : Todo.UNDONE_MARKER();
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }

}


class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  toString() {
    let title = "---- Today's Todos ----";
    let list = this.todos.map(todo => todo.toString()).join("\n");
    return `${title}\n${list}`;
  }

  add(todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError("can only add Todo objects");
    }

    this.todos.push(todo);
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size() - 1];
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  _validateIndex(index) { // _ in name suggests a "private" method
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }

  isDone() {
    return this.todos.every(todo => todo.isDone());
  }

  pop() {
    return this.todos.pop();

  }

  shift() {
    return this.todos.shift();

  }

  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1);
  }

  forEach(callback) {
    this.todos.forEach(callback);
  }

  filter(callback) {
    let returnedArray = new TodoList(this.title);
    this.forEach(todo => {
      if (callback(todo)) returnedArray.add(todo);
    });

    return returnedArray;
  }

  findByTitle(title) {
    let matchedTitles = this.filter(item => item.title === title);
    return (matchedTitles === undefined ? undefined : matchedTitles.todos[0]);
  }

  allDone() {
    let doneItems = this.filter(item => item.isDone());
    return doneItems.todos;
  }

  allNotDone() {
    let notDoneItems = this.filter(item => !item.isDone());
    return notDoneItems.todos;
  }

  markDone(title) {
    let todo = this.findByTitle(title);
    if (todo !== undefined) {
      todo.markDone();
    }
  }

  markAllDone() {
    this.forEach(todo => todo.markDone());
  }

  markAllUndone() {
    this.forEach(todo => todo.markUndone());
  }


}

let list = new TodoList("today's Todos");

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);

todo1.markDone();
todo5.markDone();


list.markAllDone();

console.log(list);