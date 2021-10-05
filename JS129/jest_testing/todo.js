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

module.exports = Todo;